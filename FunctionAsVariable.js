//functionAsVariable.js

function TextForPrint () 
{ 
	return 'Some Text'; 
}
function Printer (func) 
{ 	
	console.log(func); 
}
var myfunc = TextForPrint();
Printer(myfunc);

