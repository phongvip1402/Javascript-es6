const count = true;
let promise = new Promise((resolve, reject) => {
    // if (count) {
    //     resolve('yes');
    // } else {
    //     reject('no');
    // }
    reject('hàm lỗi')
});

// console.log(promise);

promise.then(value => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})