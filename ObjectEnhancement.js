//same keys amd values
function createInstructor(firstName, lastName) {
   return {
     firstName: firstName,
     lastName: lastName
}
}
//refactored  to ES2015
const createInstructor = (firstName, lastName) => ({
   firstName,
   lastName
 });
        
// Test case
console.log(createInstructor("John", "Doe")); // { firstName: "John", lastName: "Doe" }
              
//computed property name
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!";
//refatored to ES2015
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};
// Test case
console.log(instructor); // { firstName: "Colt", 42: "That is my favorite!" }

//object Methods
var instructor = {
   firstName: "Colt",
   sayHi: function() {
     return "Hi!";
},
   sayBye: function() {
      return this.firstName + " says bye!";
}
}
//refactored  to ES2015
const instructor = {
   firstName: "Colt",
   sayHi() {
      return "Hi!";
},
   sayBye() {
      return `${this.firstName} says bye!`;
 }
};
        
// Test cases
console.log(instructor.sayHi()); // "Hi!"
console.log(instructor.sayBye()); // "Colt says bye!"


//createAnimal Function
//Write a function which generates an animal object. The function should accepts 3 arguments:

//species: the species of animal (‘cat’, ‘dog’)
//verb: a string used to name a function (‘bark’, ‘bleet’)
//noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}