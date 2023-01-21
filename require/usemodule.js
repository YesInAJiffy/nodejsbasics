//usemodule.js
const modlib = require('./modulelibrary.js');
modlib.MyFunction();
modlib.Hello("Tim");

console.log("Name: ", modlib.getName(), '  Age: ', modlib.age);


const anothermodlib = require('./anothermodulelibrary.js');
anothermodlib(12, (error,val) => {if(error) console.log(error); else console.log(val);});