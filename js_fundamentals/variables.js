// Exercises: Variables

// EXERCISE: The Fortune Teller

var x = "Web Dev";
var y = "Gifu";
var z = "YH";
var n = "2";

var future = "You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.";
console.log(future);

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// EXERCISE: The Age Calculator

var now = "2013";
var born = "1989";
var age = (now - born);
console.log(age)

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

// EXERCISE: The Lifetime Supply Calculator

var current = "26";
var max = "85";
var daily = "3";

var days = ((max - current) * 365) * 3;

var total = "You will need " + days + " to last you until the ripe old age of " + max;
console.log(total)

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// EXERCISE: The Geometrizer

var rad = 6;
var circ = Math.PI * (Math.pow(rad,2));
var area = 2 * Math.PI * (Math.pow(rad,2)); 
var circumference = "The circumference is " + circ + " and the area is " + area + " squared";
console.log(circumference);

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

var tempC = 30;
var toF = (tempC * 9) / 5 + 32 ;
var tempF = 75;
var toC = (tempF - 32) * 5 / 9 ;
var temps1 = "30C is " + toF + " fahrenheit";
var temps2 = "75F is " + toC + " celsius";
console.log(temps1, temps2) 

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


