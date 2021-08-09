const Person = require('./person');
const person = require('./person');
const Logger = require('./logger')

console.log(person);

const person1 = new Person('John Deo', 30);

person1.greetings();

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World');