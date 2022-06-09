function isTrueEmail(str) {
    let emailPattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (emailPattern.test(str)) {
        return true;
    }
    return false;
}
console.log('True Email');
console.log(isTrueEmail('a@gmail.com'));
console.log(isTrueEmail('ab@yahoo.com'));
console.log(isTrueEmail('abc@hotmail.com'));
console.log('False Email');
console.log(isTrueEmail('@gmail.com'));
console.log(isTrueEmail('ab@gmail.'));
console.log(isTrueEmail('@#abc@gmail.com'));