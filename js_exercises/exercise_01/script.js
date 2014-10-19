// EXERCISE 1 **********

//Create the needed variables: array, s for sum, p for product and i for counter in for loop
var funds = [5, 10, 17, 1];
var s = 0;
var p = 1;
var i = 0;

// Create a for loop that will traverse through the data and either add and multiply the numbers
//together. Make sure each is assigned to the correct variable name specified above.
for (i = 0; i < funds.length; i++) {
	s += funds[i];
	p *= funds[i];
}

//Print the results to the console.
console.log("s is " + s + " and p is " + p);

