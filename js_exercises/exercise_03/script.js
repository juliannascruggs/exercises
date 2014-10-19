// EXERCISE 2 ***********

// Create an array of arrays, aka a 2D array. Using the example listed below.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
var raRa = [[1, 2, 3, 4],[1, 2, 3, 4],[1, 2, 3, 4],[1, 2, 3, 4]];

// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// etc....
//***********To access 2-dimensional array elements we would "console.log(array[i][j]);"
//var numberSet = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Here's not how to do it:

// var i;
// var j;
//Write the first for loop
//for(i = 0; i < raRa.length; i++){

  //Write second for loop to print the secondary data set
//  for(j = 0; j < raRa[i].length; j++){
//  	console.log(raRa[i][j]);
//  }
//}

// Here's how you should do it: 

for (var i in raRa) {
	console.log("The value of raRa row " + i + " is: " + raRa[i])
	for (var j in raRa[i]) {
		console.log("The value of raRa row " + i + ", index " + j + " is " + raRa[i][j])
	} 
}
// Note to self/teacher: I don't understand why calling raRa[i] and then proceeding that with [j] allows me to prnt the whole raRa




