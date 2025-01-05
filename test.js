
const { sum } = require('./app.js');

test('adds 13 + 8 to equal 21',() =>{
    let total = sum(13,8);

    expect(total).toBe(21);
});

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');


    const dollars = fromEuroToDollar(3.5);

  
    const expected = 3.5 * 1.07; 
    
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("3.745 dollars should be 547.75 yen", function(){
    const { fromDollarToYen } = require('./app.js');
    
    const yen = fromDollarToYen(3.745);
    const expected = (3.745/1.07) * 156.5;

    expect(fromDollarToYen(3.745)).toBe(547.75);

})

test("313 yen should be 1.74 pound", function(){
    const { fromYenToPound } = require('./app.js');

    const yen = fromYenToPound(313);
    const expected = (313/156.5) * 0.87;
    expect(fromYenToPound(313)).toBe(1.74)

})