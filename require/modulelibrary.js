//modulelibrary.js

console.log("I will but run once");

function MyFunction() {
    console.log("Inside My Function");
  }

function Hello(name)
{
    console.log("Hello", name);
}

module.exports.MyFunction = MyFunction
module.exports.Hello = Hello


// ANOTHER FORMAT
exports.getName = () => {
    return 'TIM';
  };
exports.age = '72';



