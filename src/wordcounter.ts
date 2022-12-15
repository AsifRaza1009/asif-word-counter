#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.clear();

console.log(
  chalk.bgGreen.whiteBright.bold(
    `\n\t*** welcome to my word counter program ***\n\n`
  )
);

let response: { paragraph: string } = await inquirer.prompt([
  {
    name: "paragraph",
    message: " Please put your paragraph whose words has to be counted : ",
    type: "input",
    default: "",
  },
]);

let parag = response.paragraph;

let wordList = parag.split(" ");

let numwords = wordList.length;

let joinswords = wordList.join("");

let finalNumber = joinswords.length;

setTimeout(() => {
  console.log(
    chalk.bgRed.whiteBright(
      `\n\n\t Total Number of words in the given Paragraph is   = ${numwords}  \n`
    )
  );
  setTimeout(() => {
    console.log(
      chalk.bgRed.whiteBright.bold.italic(
        `\n\t Total Number of the charcter in given Paragraph is =  ${finalNumber} \n\n`
      )
    );
  }, 1000);
}, 1000);
