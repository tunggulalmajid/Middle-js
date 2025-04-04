// High Order Function

// ForEach
let numbers = [1, 2, 3, 4, 5];

for (let value of numbers){
    console.log(value);
}

console.log("\n")
// akan sama dengan

numbers.forEach(hasil =>{
    console.log(hasil);
}

)

//map
let hasilMap = numbers.map(number =>{
    return number * 2
}) // atau bisa loangsung number => number*2 (karena arrow func langsung return)
console.log(hasilMap) //untuk array numbers akan langsung dikali 2


