import bcrypt from 'bcrypt';

const password = 'password';

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

bcrypt.compare(password, "$2b$11$UCVeEUcJlA/K8KdtKOy51eMHp7bDvzpV/lf9RTAKZq9V0SjKm1V4a").then((result) => {
    console.log({ result });
});
