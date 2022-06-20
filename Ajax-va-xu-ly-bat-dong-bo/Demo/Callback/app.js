function asyncFunction(callback) {
    console.log('start');
    setTimeout(() => { callback(); }, 100);
    console.log('waiting');
}

let printEnd = () => { console.log('end'); }

asyncFunction(printEnd);