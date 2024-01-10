// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// const password = 'password';

// console.log("starting");
// bcrypt.hash(password, 11).then(() => {
//     console.log("done");
// });
// The higher the salt or rounds, the longer it takes to hash the password (11-15 Optimal)

// bcrypt.hash(password, 11, (error, result) => {
//     console.log({ result });
// });

// bcrypt.hash(password, 11).then((result) => {
//     console.log({ result });
// });

// bcrypt.compare(password, "$2b$11$UCVeEUcJlA/K8KdtKOy51eMHp7bDvzpV/lf9RTAKZq9V0SjKm1V4a").then((result) => {
//     console.log({ result });
// });

// jon = "$2b$11$3Qo9tpVSCHwbI2JzFAO.bu9byxzDwmQJeU3gfHulzDhZ0n.HSfYyi"
// peter = "$2b$11$ghQnsl1T8bFAhOjsaacqT.ADbc79Gqt3FwTvgh5AB0e5wILW0deT6"
// const jonHashedPassword = "$2b$11$3Qo9tpVSCHwbI2JzFAO.bu9byxzDwmQJeU3gfHulzDhZ0n.HSfYyi";
// const peterHashedPassword = "$2b$11$ghQnsl1T8bFAhOjsaacqT.ADbc79Gqt3FwTvgh5AB0e5wILW0deT6";

// bcrypt.compare("jon_password", jonHashedPassword).then((result) => {
//     console.log({ result });
// }); // result is true

// bcrypt.compare("jon_password", peterHashedPassword).then((result) => {
//     console.log({ result });
// }); // result is false

// const actualJwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9uIiwiaWF0IjoxNzA0ODQ5NDgwfQ.m6WvEeJ0j5gljZlMMQnFkCDHs__5OIdQ849kk-NyNw4";
// const editedJwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmltbXkgTmV1dHJvbiIsImlhdCI6MTcwNDg0OTQ4MH0.Kqc7n3yJ8COqy2lsjOTutzpI2C1wT_NEOL-1JpN67rg";

// const data = {
//     name: "Jon",
// }

// const myJwt = jwt.sign(data, "super-secret");

// const verifyData = jwt.verify(actualJwtToken, "super-secret");

// const verifyData = jwt.verify(editedJwtToken, "super-secret");

// console.log({ 
//     // myJwt 
//     verifyData
// });