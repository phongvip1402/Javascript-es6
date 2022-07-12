// bai 1: call back simple
function greet(name, callback){
    console.log(`hi ${name}`);
    callback();
}

function callMe(){
    console.log('I am call back function');
}

greet('Peter',callMe);

// bai 2: call back with setTimeout

function greet2(){
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

setTimeout(greet,2000);
sayName('Linh');

// Bài 3
function greet3(name, myFunction){
    console.log('hello world');
    myFunction(name);
}
function sayName2(name){
    console.log('Hello' + ' ' + name);
}
setTimeout(greet3,1000,'Marry',sayName2);