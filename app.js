

const sum = (a,b) =>{
    return a + b;
}
console.log(sum(7,3))

module.exports = {sum};

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar/1.07) * 156.5 ;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen/156.5) * 0.87;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07, 
    "GBP": 0.87,
}

