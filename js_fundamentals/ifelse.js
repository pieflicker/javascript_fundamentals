// Exercises: if/else statements

// EXERCISE: What number's bigger?
function greaterNum(one, two){
	var un = one;
	var deux = two;
	
	if (un>deux)
	{
		alert(one + " is bigger!");
	}
	else
	{
		alert(two + " is bigger!");
	}
}
greaterNum(25, 17);
greaterNum(25, 80);
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater 
//number of 5 and 10 is 10.").

// EXERCISE: The World Translator

function helloWorld(lang){
	if (lang == "jp")
	{
		var x = "こんにちは世界";
	}
	else if (lang == "es") 
	{
		var x = "hola mundo";
	}
	else 
	{
		var x = "Hello world";
	}

	alert(x);
}

helloWorld("jp");
helloWorld("es");
helloWorld("bg");

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
// EXERCISE: The Grade Assigner

function assignGrade(score) {
	if (score > 90)
	{
		var x = "A";
	}
	else if (score > 79 && score <90)
	{	
		var x = "B";
	}
	else if (score > 69 && score <80)
	{	
		var x = "C";
	}
	else if (score > 59 && score <70)
	{	
		var x = "D";
	}
	else if (score > 49 && score <60)
	{	
		var x = "E";
	}
	else
	{	
		var x = "F";
	}

	alert(x);
}

assignGrade(90);


// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// EXERCISE: The Pluralizer

function pluralizer(noun, number) {
	if (number > 1)
	{
		var x = number + " " + noun + "s";
	}
	else 
	{
		var x = number + " " + noun;
	}
	alert(x)
}
 pluralizer(Dog, 6);

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".




