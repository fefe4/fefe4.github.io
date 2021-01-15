function add (a,b) {
	a = parseFloat(a);
	b = parseFloat(b);
	return a+b;
}
function subtract (a,b) {
  return a-b;  
}
function divide (a,b) {
  return a/b;
}
function multiply (a,b) {
  return a*b;
}
function operate (a, operator, b) {
  switch (operator) {
	case "+" :
    return add (a,b);
    break;
  case "-" :
    return  subtract (a,b);
		break;
	case "x":
		return multiply (a,b);
		break;
	case "/": 
		if (b == 0){
			return "you can't divide by 0"
		}
		else {
			return divide (a,b);
		}
		break;
 	}
}
let displaydata = "";
const buttons = document.querySelectorAll('.potato');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
		document.getElementById('display').textContent = "" + displaydata + button.id;
		displaydata = document.getElementById('display').innerText = displaydata + button.id;
	});
});

const btnOperator = document.querySelectorAll ('.operator');
btnOperator.forEach((button) => {
button.addEventListener('click', () => {
  let displayArray;
	displayArray = displaydata.split("");
	displayArray = displayArray.filter(a => (a == "+" || a == "-" || a == "x" || a == "/"));
	console.log (displayArray.length);
	if (displayArray.length > 1) {
		displaydata =  displaydata.slice(0, -2);
		const separatedthings = displaydata.split(" ");
		displaydata = (operate (...separatedthings)) + button.id;	
		document.getElementById('display').textContent = displaydata;
	}
});
});
const btnEqual = document.getElementById("=");
btnEqual.addEventListener ('click', () => {
	const separatedthings = displaydata.split(" ");
	displaydata = (operate (...separatedthings));	
	document.getElementById('display').textContent = displaydata;

});

const btnClear = document.getElementById("clear");
btnClear.addEventListener ('click', () => {
	displaydata = "";
	document.getElementById('display').textContent = "";
});


