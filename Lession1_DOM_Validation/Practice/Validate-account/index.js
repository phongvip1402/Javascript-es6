function isTrueAccount(str) {
    let accountPattern = /^[_a-z0-9]{6}$/;
    // let accountPattern = /^[_a-z0-9]{6,}$/;
    if (accountPattern.test(str)) {
        return true;
    }
    return false;
}
console.log('Account hợp lệ');
console.log(isTrueAccount('123abc_'));
console.log(isTrueAccount('_abc123'));
console.log(isTrueAccount('______'));
console.log(isTrueAccount('123456'));
console.log(isTrueAccount('abcdefg'));
console.log('Account không hợp lệ');
console.log(isTrueAccount('@'));
console.log(isTrueAccount('12345'));
console.log(isTrueAccount('1234_'));
console.log(isTrueAccount('abcde '));