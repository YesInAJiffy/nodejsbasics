//Arrowfunctions.js

let show = function () {
    console.log('Inside Anonymous function');
};

let showArrow = () => console.log('Inside Anonymous function with Arrow format');

let add = function (a, b) {
    return a + b;
};

let addArrow = (a, b) => a + b;   
let addArrowMultiline = (a, b) => {console.log("Adding in mutiline function"); return a + b;  }; 

show();
showArrow();
console.log(add(3,3));
console.log(addArrow(3,3));
console.log(addArrowMultiline(4,7));