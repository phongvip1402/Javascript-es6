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
    static programmingLanguage;
    constructor(name){
        super(name);
    }
    set writeCode(programmingLanguage){
        this.programmingLanguage = programmingLanguage;
    }
    get writeCode(){
        return `Program is ${this.programmingLanguage}`
    }
}

const program1 = new Programer('john');
program1.programmingLanguage = 'javascript';
