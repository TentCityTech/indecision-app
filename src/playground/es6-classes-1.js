class Person { // Classes and componets use UPPERCASE.
    constructor(name = 'Anonymous', age = 0) { // Constructor function
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${ this.name }!`; //Template string example.
    }
    getDescription() {
       return  `${ this.name } is ${ this.age } years(s) old.`; 
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //Calls parent information.
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor) {
            description += ` Their major is ${this.major}.`; 
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting
    }
}

const me = new Traveler('Joshua Hoagland', 33, 'Ohio');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());