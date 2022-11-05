import chalk from 'chalk';

const greeting = "Welcome!";

const callMe = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error("no firstname passed in!"));

    const fullName = `${firstName} Smith`;

    return callback(chalk.red.underline(fullName));
  }, 1000);
};

console.log(chalk.blue(greeting));
callMe("Ben", console.log);
console.log(chalk.green("To Our Planet!"));
