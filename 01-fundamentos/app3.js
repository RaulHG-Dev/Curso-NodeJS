const fs = require("fs")

const content = fs.readFileSync("readme.md", 'utf-8')

const words = content.split(' ');
const wordCount =  content.match(/React/ig ?? []).length;

console.log("Palabras:", words.length);
console.log("Palabras React:", wordCount);