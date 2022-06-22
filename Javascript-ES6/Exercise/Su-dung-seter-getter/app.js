class Person{
    static name;
    constructor(){};
    set nameInfor(name){
        this.name = name ; 
    }
    get nameInfo(){
        return this.name;
    }
    walk(){
        return 'I am walking'
    };
}

class Programer extends Person{
    constructor(name,programmingLanguage){
        super(name);
        this.programmingLanguage= programmingLanguage;
    }
    set writeCode(programmingLanguage){
        this.programmingLanguage = programmingLanguage;
    }
    get writeCode(){
        return `Program is ${this.programmingLanguage}`
    }
}

let program1 = new Programer('john');
program1.programmingLanguage = 'javascript';
console.log(program1.writeCode);
program1.writeCode= 'python';
console.log(program1.writeCode);
