const addItems = require('./index');

test('adds an element to an array using the splice method',()=>{
    array = ['pack of wolves','school of fish','library of books'];
    expected = ['pack of wolves','pride of lions','school of fish','library of books'];
    expect(addItems(array)).toStrictEqual(expected);
})