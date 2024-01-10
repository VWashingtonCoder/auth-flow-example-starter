import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../prisma/db.setup";

const saltRounds = 11;
const secret = (process.env as NodeJS.ProcessEnv).JWT_SECRET;

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const createUnsecuredUserInformation = (user: User) => ({
  email: user.email,
});

export const createTokenForUser = (user: User) => {
  const secret = (process.env as NodeJS.ProcessEnv).JWT_SECRET;
  return jwt.sign(
    createUnsecuredUserInformation(user),
    secret as string
  );
};

const jwtInfoSchema = z.object({
  email: z.string().email(),
  iat: z.number(),
});

export const getDataFromAuthToken = (token?: string) => {
  if (!token) return false;
  try {
    return jwtInfoSchema.parse(
      jwt.verify(token, secret as string)
    );
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // JWT HANDLING STUFF 👇
  const [, token] = req.headers.authorization?.split(" ") || [];
  const myJwtData = getDataFromAuthToken(token);
  if (!myJwtData) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  const userFromJwt = await prisma.user.findFirst({
    where: {
      email: myJwtData.email,
    },
  });
  if (!userFromJwt) {
    return res.status(401).json({ message: "USer not found" });
  }

  (req as any).user = userFromJwt;
  next();
  // JWT HANDLING STUFF 👆
};
