/* -------------------------------------------- 

	You've just learned all about functions. 
	Now take what you've learned to create your own

					CALCULATOR!

	We'll guide you through the first few steps,
	then you'll have a chance to add your own features
	that will make this your new go-to calculator!

  -------------------------------------------- */



/* -------------------------------------------- 

Part 1: 

	The first features of any simple calculator is that
	it should be able to perform the basic math operations. 
	Let's start by writing the functions we'll need to execute 
	the following operations:

		Addition
		Subtraction

  -------------------------------------------- */

// Write a function called addNumbers that will take two numbers and return the sum.
const READLINE = require("readline-sync");
console.log("SHAYLEE'S MATH GENIUS");
var operation=READLINE.question('What operation would you like to perform:\nOption 1- Adding\nOption 2- Subtration\nOption 3-Multiplication\nOption 4- Division\nOption 5- Log\nOption 6- Power\nPlease input the number of the operation you would like to perform:')

if (operation=='1'){
	addNumber()
}
else if (operation=='2'){
	subtractNumber()
}
else if (operation=='3'){
	multiplyNumber()
}
else if (operation=='4'){
	divideNumber()
}
else if (operation=='5'){
	logNumber()
}
else if (operation=='6'){
	POWNumber()
}

function addNumber() {
	x = READLINE.question('ADDING: ')
	y = READLINE.question('+ ')
	x = parseInt(x, 10);
	y = parseInt(y, 10);

	adding(x, y)
};

function adding(x,y) {
	z = x + y
	console.log(`${x}+${y}=${z}`)
};





// Write a function called subNumbers that will take two numbers and return the difference.

function subtractNumber() {
	x = READLINE.question('SUBTRACTING: ')
	y = READLINE.question('- ')
	x = parseInt(x, 10);
	y = parseInt(y, 10);

	subtracting(x, y)
};

function subtracting(x,y) {
	z = x - y
	console.log(`${x}-${y}=${z}`)
};



/*------------*/
// Testing Code - Uncomment the code below to test your code!

// checkAnswers(addNumbers(5, 15), 20); 
// checkAnswers(addNumbers(3, 18), 21);
// checkAnswers(addNumbers(12, 28), 40); 

// checkAnswers(subNumbers(18, 7), 11);
// checkAnswers(subNumbers(11, 9), 2);
// checkAnswers(subNumbers(18, 21), -3);

/* -------------------------------------------- 

Part 2: 

	Now that you have addition and subtraction down, let's add the other operators we learned!

	Finish off your basic calculator by writing the functions 
	for the following operations:

		Multiplication
		Division 

  -------------------------------------------- */

// Write a function called multiplyNumbers that will take two numbers and return the product.

function multiplyNumber() {
	x = READLINE.question('MULTIPLYING: ')
	y = READLINE.question('x ')
	x = parseInt(x, 10);
	y = parseInt(y, 10);

	multiplying(x, y)
};

function multiplying(x,y) {
	z = x * y
	console.log(`${x}x${y}=${z}`)
};




// Write a function called divideNumbers that will take two numbers and return the quotent.

function divideNumber() {
	x = READLINE.question('DIVIDE: ')
	y = READLINE.question('÷ ')
	x = parseInt(x, 10);
	y = parseInt(y, 10);

	dividing(x, y)
};

function dividing(x,y) {
	z = x / y
	console.log(`${x}÷${y}=${z}`)
};




/*------------*/
// Testing Code - Uncomment the code below to test your code!

// checkAnswers(multiplyNumbers(10, 3), 30); 
// checkAnswers(multiplyNumbers(21, 7), 147);
// checkAnswers(multiplyNumbers(4, 16), 64); 

// checkAnswers(divideNumbers(24, 100), `.24`);
// checkAnswers(divideNumbers(21, 7), `3`);
// checkAnswers(divideNumbers(15, 4), `3.75`);

/* -------------------------------------------- 

Part 3: 

	Now that you have your basic functions in place, you need to get some user input.
	What's a calculator for if no one is using it?

Write a function that will prompt the user for the operation they want to call and the values they are inputting.

  -------------------------------------------- */

//Code is up above LOOK UP 


function logNumber() {
	x = READLINE.question('BASE: ')
	y = READLINE.question('NUMBER: ')
	x = parseInt(x, 10);
	y = parseInt(y, 10);

	LOG(x,y)
};

function LOG(x,y) {
	z = Math.log(y)/Math.log(x)
	console.log(`Log base ${x} with number ${y} = ${z}`)
};

function POWNumber() {
	x = READLINE.question('NUMBER: ')
	y = READLINE.question('POWER: ')
	x = parseInt(x, 10);
	y = parseInt(y, 10);

	POW(x,y)
};

function POW(x,y) {
	z = Math.pow(x, y);
	console.log(` ${x} ^ ${y} = ${z}`)
};












/* -------------------------------------------- 

Part 4: 

	Now that you have all of the basic four operations completed, you get to add your own features!
	What will you add to make this your go-to calculator? 

	Stuck? : Think about what you count/calculate on a (almost) daily basis.
	Can you write a function that will take in the data you need and do the calculation for you? 

	(I know I calculate how many hours of sleep I get every day... ｡(*^▽^*)ゞ )

  -------------------------------------------- 

Write a function or functions that will add some unique features to your calculator. 
Don't forget to:
		Give your function an name and parameters that are self explanatory and written in camelcase!
		Use comments throughout your code
		Test your code!
  
  -------------------------------------------- */





















/* -------------------------------------------- */
// Ignore this section. This is just for checking your work

function checkAnswers(genAnswer, correctAnswer) {
	if (genAnswer == correctAnswer) {
		console.log(`Your code works!`)
	}
	else {
		console.log(`Try again, your code generated ${genAnswer} but the correct answer is ${correctAnswer}`);
	}
}