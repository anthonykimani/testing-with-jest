const sum = require('./index')

test('add to numbers together',()=>{
    expect(sum(1,2)).toBe(3)
})