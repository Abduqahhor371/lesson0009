
// Loop

//  1-misol
let result = [];
{
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) result.push(i);
    }
    return result;
}
// 2-misol
{
    let result = [];
    for (let i = 10; i < a; i += 10) {
        result.push(i);
    }
    return result;
}
// 3-misol
{
    let result = [];
    for (let i = 1; i <= a; i++) {
        result.push(i * i);
    }
    return result;
}
// 4-misol
{
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}
// 5-misol
{
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1 && str[i] === '?') continue;
        result += str[i];
    }
    return result;
}

// 6-misol
{
    let result = [];
    for (let i = 0; i < a; i++) {
        result.push(a);
    }
    return result;
}
// 7-misol
{
    let falsyValues = [false, 0, "", null, undefined, NaN];
    for (let i = 0; i < falsyValues.length; i++) {
        if (value === falsyValues[i]) return false;
    }
    return true;
}



// Recursive

// 1-misol

function evenNumbersRecursive(a, b, result = []) {
    if (a > b) return result;
    if (a % 2 === 0) result.push(a);
    return evenNumbersRecursive(a + 1, b, result);
}

// 2-misol

function tensRecursive(a, result = []) {
    if (a < 10) return result;
    result.unshift(a - (a % 10));
    return tensRecursive(a - 10, result);
}

// 3-misol

function squareNumbersRecursive(a, result = []) {
    if (a < 1) return result;
    result.unshift(a * a);
    return squareNumbersRecursive(a - 1, result);
}

// 4-misol

function sortDigitsRecursive(num) {
    const digits = num.toString().split('').map(Number);
    if (digits.length === 0) return '';
    const min = Math.min(...digits);
    const idx = digits.indexOf(min);
    digits.splice(idx, 1);
    return min + sortDigitsRecursive(parseInt(digits.join('')) || 0);
}

// 5-misol

function removeQuestionMarkRecursive(str) {
    if (str.length === 0) return '';
    const lastChar = str[str.length - 1];
    return (lastChar === '?' ? str.slice(0, -1) : str);
}

// 6-misol

function repeatNumberRecursive(a, result = []) {
    if (result.length === a) return result;
    result.push(a);
    return repeatNumberRecursive(a, result);
}

// 7-misol

function isTruthy(value) {
    if (!value) return false;
    return true;
}