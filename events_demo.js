const EventEmitter = require('events');
// event class
class MyEmitter extends EventEmitter{}

//init object
const myEmitter = new MyEmitter();

//listner

myEmitter.on('event', () => console.log('Event Fired'));

myEmitter.emit('event');



