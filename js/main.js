//Non Functional

var name = "Anubis";
var greeting = "Hi, I'm ";
console.log(greeting + name);


//Functional
function greet (name){
  return "Hi, I'm " + name;
}
greet("Anubis");

//You want a function to take an input and return an output called "Pure" function

// Not a pure function
var name = "Myla Biton";//Takes input from global state. There is no input taken in as a parameter for the function
function greet (){
  console.log("Hi, I'm " + name)
}

//Pure Function
function greet(name){
  return "Hi, I'm " + name;
}
//Use of Higher Order Function

function makeAdjectifier(adjective){
  return function (string){
    return adjective + " " + string;
  };
}
var coolifer = makeAdjectifier("cool");
//Don't iterate
//instead map, reduce, filter


//Example of "Mutation" which is non-functional

var rooms = ['h1','h2','h3'];
room[2] = "h4";
rooms;

//No Mutation (good)

var rooms = ['h1', 'h2', 'h3'];
var newRooms = rooms.map(function (rm){
  if (rm === "h3") {
    return "h4";
  } else {
    return rm;
  }
});
newRooms;

//Persistent data structures for efficient immutablity


/* How to pass JavaScript interviews */
//What is expected from a junior developer?
expected to show your passion about developing


//What kinda of projects have you worked on
Not good to answer that you havent built any projects, reference your github account. A recent website you built.
No one is expecting perfect code. Just show that you are active and learning something everyday. s
