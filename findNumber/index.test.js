const findNumber = require('./index')

test('finds a number in given array',()=>{
    array = [2,3,5,1,4,6,2,2,];
    number = 6;
    expect(findNumber(array,number)).toBe(number);
})