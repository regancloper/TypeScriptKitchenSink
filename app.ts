// declares a variable called name and sets it to author's name
let myName: string = "Regan Loper";

// declares a constant for the number of U.S. states
const NUM_STATES: number = 50;

// computes the sum of 5 and 4
let sum: number = 5 + 4;

sayHello();

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let bestveggies: string[] = ["okra", "broccoli", "onion", "carrot", "pickles"];

for (let i = 0; i < bestveggies.length; i++) {
    console.log(bestveggies[i]);
}

interface Person {
    name: string;
    age: number;
}

let people: Array<Person> = [
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

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

let strlength: number = getLength("Hello World");
if (strlength % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

function sayHello() {
    alert("Hello World!");
}

function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

function getLength(word: string) {
    return word.length;
}