module.exports =  function reverse(n) {
    const abs = Math.abs(n);
    const string = String(abs);
    const newString = string.split("").reverse().join("");
    return Number(newString);
}
