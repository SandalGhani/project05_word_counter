#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import the "inquirer" module, which is a command line interface for node.js
var inquirer_1 = require("inquirer");
//declare a const "answer" and assign it to the result of inquirer.prompt function
var answer = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
var words = answer.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console 
console.log("your sentence word count is ".concat(words.length, " "));
