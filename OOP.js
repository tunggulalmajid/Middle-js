//object dan kelas

let Mobil = {
    nama : "civic",
    type : "Sedan",
    price: 1000000000,

    hidupkanMesin : function(){
        console.log("mesin hidup");
    },
    matikanMesin : function(){
        console.log("mesin mati");
    }
}// contoh diatas adalah sebuah object 

class Sedan {
    constructor(nama, type, price) { //consturtor dan attribut
        this.nama = nama;
        this.type = type;
        this.price = price;
    }

    hidupkanMesin (){
        console.log("mesin hidup");
    }

    matikanMesin (){
        console.log("mesin mati");
    }//method
    
    
}

let sebuahSedan = new Sedan("Civic", "Sedan", 1000000000); //membuat objek baru dari class (Instance)

console.log(Mobil.nama);
console.log(sebuahSedan.nama)

console.log(Mobil);
console.log(sebuahSedan);


// latihan
class Student {
    // subject = [] //tidak perlu deklarasi
    constructor(name, subject, score){
        this.name = name;
        this.subject = subject;
        this.score = score;
    }
    sebutkanNama(){
        console.log("Namaku Adalah : " + this.name);
    }
    sebutkanSubject(){
        this.subject.forEach(value => {
            console.log(value)})
    }
}

let Budi = new Student("Budi", ["hai", "halo"], 100)
console.log(Budi)
Budi.sebutkanNama();
Budi.sebutkanSubject();
console.log("\n\n\n")


//inheritance
class Binatang{
    constructor(nama, jenis){
        this.nama = nama;
        this.jenis = jenis; 
    }
    Makan(){
        console.log(this.nama + " sedang makan");
    }
}
class Kucing extends Binatang{ //kucing menjadi sub class dari super class Binatang
    constructor(nama, jenis, warna){
        super(nama, jenis); //jika c# memakai base, jika js memakai super
        this.warna = warna;
    }
}

//encapsulation
 class Barang{
    constructor(nama, jenis){
        this._nama = nama; //otomatis private jika diawali _ sebelum variabel
        this._jenis = jenis;
    }
    get nama(){//menyertakan kata kunci get didepan
        return this._nama;
    }
    set setNama (nama){// menyertakan kata kunci set didepan
        this._nama = nama;
    }
    get jenis(){
        return this._jenis;
    }
    set setJenis(jenis){
        this._jenis = jenis;
    }
 }



















