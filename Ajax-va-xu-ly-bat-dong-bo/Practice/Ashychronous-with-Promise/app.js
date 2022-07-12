//Bài 1
const count = true;

let countValue = new Promise(function (resolve,reject){
    if(count){
        resolve('There is a count value.');
    }else{
        reject('There is no count value');
    }
})
console.log(countValue);

//Bài 2
 let countValue2 = new Promise(function(resolve,reject){
    resolve("Promise resolved");
 });

 countValue2.then(function successValue(result){
    console.log(result);
 })
 .then(function successValue(){
    console.log("You can call multiple functions this way.");
 });

 //Bài 3
  let countValue3 = new Promise( function (resolve,reject){
        reject('Promise reject');
  })

  countValue3.then(function successValue(result){
    console.log(result);
  })
  .catch(function errorValue(result){
    console.log(result);
  })