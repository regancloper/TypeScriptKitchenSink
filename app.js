// declares a variable called name and sets it to author's name
var myName = "Regan Loper";
// declares a constant for the number of U.S. states
var NUM_STATES = 50;
// computes the sum of 5 and 4
var sum = 5 + 4;
sayHello();
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var bestveggies = ["okra", "broccoli", "onion", "carrot", "pickles"];
for (var i = 0; i < bestveggies.length; i++) {
    console.log(bestveggies[i]);
}
var people = [
    {
        name: "Jessie",
        age: 25
    },
    {
        name: "Jennifer",
        age: 16
    },
    {
        name: "Robert",
        age: 42
    },
    {
        name: "Arnold",
        age: 12
    },
    {
        name: "Albert",
        age: 26
    }
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
var strlength = getLength("Hello World");
if (strlength % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
function sayHello() {
    alert("Hello World!");
}
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
function getLength(word) {
    return word.length;
}
