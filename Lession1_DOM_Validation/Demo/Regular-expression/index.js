let regexp = /^[A-Z]/;

function isFirstletterUpperCase(str) {
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}

isFirstletterUpperCase('Nguyen van Nam');
isFirstletterUpperCase('NGUYEN VAN NAM');
isFirstletterUpperCase('nguyen van Nam');