// anothermodulelibrary.js

// YET ANOTHER FORMAT
// cbc(12, (error,val) => {if(error) console.log(error); else console.log(val);});
module.exports = (x, callback) => {
  console.log("Inside my implementation");
  if (x <= 0)
      
    callback(new Error("Please present a number greater than Zero, you have given " + x),
          null);
  else
      setTimeout(() =>
          callback(null, 
               "completed my 2 second job"
          ), 2000);
}


