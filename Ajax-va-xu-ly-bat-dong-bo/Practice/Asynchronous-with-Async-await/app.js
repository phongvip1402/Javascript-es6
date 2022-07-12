async function f(){
    console.log('Async function');
    return Promise.resolve(1);
}
//bai 1
f();
 // bai 2

 f().then(function (result){
console.log(result);
 })

 //bai 3
 let promise =  new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve('Promise resolve.')
    },4000);
 });

 async function asyncFunc(){
    let result = await promise;
    console.log(result);
    console.log('hello');
 }

 asyncFunc();