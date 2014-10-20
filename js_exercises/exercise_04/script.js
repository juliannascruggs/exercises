//Create a function that accepts 4 arguements from the function called "start, middleLower, middleUpper, finish"

var fizzyThings = function(start, middleLower, middleUpper, finish){

//Create a for loop that will go from "start" to "finish" (these are numbers so we should
//just count through it one by one)

  for (var i = start; i <= finish ; i++) {

  //Next we will need a series of conditional statements that test if the whole number is divisible
    //by middleLower and/or middleUpper so that it has a remainder of 0.

  //We will only use 3 of the 4 parameters in these conditional statements

  //You need to figure out which ones and what order in order to display the expected output below
    if (i % middleLower == 0 && i % middleUpper == 0) {
      console.log("FizzBuzz");
    }else if (i % middleLower == 0){
      console.log("Fizz");
    }else if (i % middleUpper == 0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
  }

}

fizzyThings(1, 3, 5, 15);

//Expected Output:

  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // Fizz
  // 7
  // 8
  // Fizz
  // Buzz
  // 11
  // Fizz
  // 13
  // 14
  // FizzBuzz
