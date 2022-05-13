// FAIL  ./code-challenges.test.js
// ● Test suite failed to run
//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe 
//it  
//expect 
//toEqual 

// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe autoSentence
//it  takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
//expect (autoSentence(people))
//toEqual ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// a) Create a test with an expect statement using the variable provided.

describe("autoSentence", () =>{
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () =>{
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(autoSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// ● autoSentence › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// ReferenceError: autoSentence is not defined

// b) Create the function that makes the test pass.

//create a function called autoSentence taking in an array that remindes me of a hash idk the difference... Or is it an array of hashes? the question said objects but im still clue less on terms.
// having not worked with this type of information I'm unsure how map will work but I'll use it on autoSentence
//map will take in each indexed hash and use the hashes to capitalize the name 
//in the same map it will combine the capitalized name with " is" the occupation and add a "." to the end.
// return map and it should give out expected output

const autoSentence = (storytime) => {
  return storytime.map(paragraph =>{
    capName =   paragraph.name.split(" ").map(name =>{
      return name[0].toUpperCase() + name.substring(1)
    }).join(" ")
      return (capName + " is " + paragraph.occupation + ".")
  })
}
// PASS  ./code-challenges.test.js
// autoSentence
//   √ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe onlyRemainD3
//it  takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//expect (onlyRemainD3(hodgepodge1))
//toEqual [ 2, 0, -1, 0 ]
// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainD3", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(onlyRemainD3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainD3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// ● onlyRemainD3 › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// ReferenceError: onlyRemainD3 is not defined


// b) Create the function that makes the test pass.
// create a  function called onlyRemainD3
//use filter to remove non numbers
//within that filter I think I can make it return the remainders of the numbers so lets see

const onlyRemainD3 = (threeLittlePigs) => {
  return threeLittlePigs.filter(value => {
    return typeof value === "number" 
  }).map(value => {
    return value % 3
  })
}

//had to split work it into a map could not get the math to work within the filter.
// √ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//Follow Red, Green, Refactor
//describe,it,expect,toEqual
//describe cubeNSum
//it  takes in an array of numbers and returns the sum of all the numbers cubed.
//expect (cubeNSum(cubeAndSum1))
//toEqual 99

// a) Create a test with an expect statement using the variables provided.

describe("cubeNSum",() => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.",() => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubeNSum(cubeAndSum1)).toEqual(99)
    expect(cubeNSum(cubeAndSum2)).toEqual(1125)
  })
})
// cubeNSum
// × takes in an array of numbers and returns the sum of all the numbers cubed.

// ● cubeNSum › takes in an array of numbers and returns the sum of all the numbers cubed.

// ReferenceError: cubeNSum is not defined


// b) Create the function that makes the test pass.

//create function called cubeNSum
//use a loop to add numbers
//set up a variable to hold prior sum
//return prior sum at the end of the loop
//during the loop cube the numbers prior to summing

const cubeNSum = (musketeers) => {
  let priorSum = 0
  for(let i = 0; i < musketeers.length; i++){
    let currentCube = musketeers[i]*musketeers[i]*musketeers[i]
    let currentSum = currentCube + priorSum
    priorSum = currentSum
  }
  return priorSum
}

// cubeNSum
// √ takes in an array of numbers and returns the sum of all the numbers cubed. (28 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total