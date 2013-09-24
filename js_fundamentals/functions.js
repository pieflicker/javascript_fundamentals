// Exercises: Functions

// EXERCISE: The Fortune Teller
function tellFortune(kids, partner, location, job) {
	
	alert("You will be a " + job + " in " + location + ", and married to " + partner + " with " + kids + " kids.");
	
}
tellFortune(2, "YH", "Gifu", "web dev");
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// EXERCISE: The Age Calculator

function calculateAge(birth, current) {
	var age = (current - birth);
	var age1 = (age - 1);
	alert("You are either " + age + " or " + age1);
}
calculateAge(1986, 2013);

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// EXERCISE: The Lifetime Supply Calculator

function calculateSupply(age, daily) {
	var amount = ((85 - age) * 365) * daily; 
	alert("You will need " + amount + "to last you until the ripe old age of 85");
}
calculateSupply(26, 5);


// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// EXERCISE: The Geometrizer
function calcCircumfrence(radius) {
	var circ = Math.PI * (Math.pow(radius,2));

	alert("The circumference is " + circ);
}
calcCircumfrence(15);

function calcArea(radius) {
	var area = 2 * Math.PI * (Math.pow(radius,2)); 
	alert("The area is " + area);
}

calcArea(15);

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter
function celsiusToFahrenheit(temp){
	var C = temp;
	var F = (C * 9) / 5 + 32 ;
	alert(C + "°C is " + F + "°F");
}
celsiusToFahrenheit(22);

function fahrenheitToCelsius(temp){
	var F = temp;
	var C = (F - 32) * 5 / 9 ;
	alert(F + "°F is " + C + "°C.");
}
fahrenheitToCelsius(77);

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

