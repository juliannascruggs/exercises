//Create a function that accepts an array and a string as an arguement
//Test to see if the value passed is in the array.

arrOStr = ["Fee", "Fi", "Fo", "Fum", "English Mun"];
arrOStr2 = ["Whos Fest", "Who-Pudding", "Roast Beast", "Who-Hash"];


// You write the function! Create a function that accepts 2 arguements, the array and a string
// var arrayTester = function(arr, str){}

function arrayTester(testArray, testString){
  //Now we need a way to traverse through the array to test if it contains the String that
  //was passed into the function.

  for (var i in testArray){
    if (testArray[i] == testString) {
      console.log("String " + testString + " was found.")
    }else{
      console.log("Big Fat Nope")
    }
  }

}
//Test conditions:

arrayTester(arrOStr, "Fee") ;
arrayTester(arrOStr, "Roast Beast");
arrayTester(arrOStr2, "Roast Beast");
arrayTester(arrOStr2, "Fi");
arrayTester(arrOStr, "English Mun");
arrayTester(arrOStr2, "Fum");
arrayTester(arrOStr, "Fo");

//Expected Output:
/*

String Fee was found.
 Big Fat Nope
String Roast Beast was found.
 Big Fat Nope
String English Mun was found.
 Big Fat Nope
String Fo was found.

*/