const addItems = (array)=>{
    array.splice(1,0,'pride of lions');
    return array;
}

addItems(['pack of wolves','school of fish','library of books'])

module.exports=addItems