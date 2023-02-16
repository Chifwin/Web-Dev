"use strict"

// 1
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}
// 2
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
// 3
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "..." : str;
}
// 4
function extractCurrencyValue(str) {
    return +str.slice(1);
}
