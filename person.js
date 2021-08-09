const person = {
	name: "lincy",
	age: 45
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
  greetings() {
	  console.log(`My Name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = person;
module.exports = Person;