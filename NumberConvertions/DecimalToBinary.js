const DecimalToBinary = decimal => (parseInt(decimal) >>> 0).toString(2);
console.log(decimalToBinary(17));
