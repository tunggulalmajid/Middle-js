// cara membuat fungsi

// deklarasi (memiliki hoisting)

function deklarasi(){
    console.log("helo");
}

// Ekspresi
const jenis = function (){
    console.log("helo");
}

// Arrow
const panah = ( ) =>{
    console.log("helo");
}

deklarasi();
jenis();
panah();



// analogi arrow
function deklarasiTambah(a,b){
    return a + b;
}

const arrowTambah = (a,b) => console.log(a + b);

console.log(deklarasiTambah(10,20));
(arrowTambah(10,20));

/**
 jadi untuk urutan dalam membuat arrow fungsi adalah
 
 type variabel nama = (parameter) => {return} / body
 */

