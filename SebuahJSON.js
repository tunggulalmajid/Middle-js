//Javascript Object Notation
//menagkses file dari file data.json

const Pembaca = require('fs');
let data = Pembaca.readFileSync('data.json', 'utf8');
let dataJson = JSON.parse(data);
console.log(dataJson); //sudah menjadi array Object
console.log("\n")

dataJson.forEach(data => {
    console.log(`${data.id}. ${data.name}, nilai : ${data.score}`);
}); 


//json digunakan dalam api, dan struktur no sql (mongodb)