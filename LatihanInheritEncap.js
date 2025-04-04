//manfaatkan inheritance dan encapsulation
class Person{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    get name (){
        return this._name;
    }
    set setName (name){
        this._name = name;
    }

    get age (){
        return this._age;
    }
    set setAge (age){
        this._age = age;
    }
}

class Programmer extends Person{
    constructor(name,age,skills){
        super(name,age);
        this._skills = skills;
    }
    get skills (){
        return this._skills;
    }
    set setSkills(skills){
        this._skills = skills;
    }
}

class Student extends Person{
    constructor(name,age,scores){
        super(name,age);
        this._scores = scores;
    }
    get scores(){
        return this._scores;
    }
    set setScores(scores){
        this._scores = scores;
    }
}// java script tidak dibuat untuk oop, private tetap bisa di akses variabel nya.



