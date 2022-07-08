// Events Module
const EventEmitter = require('events');

// Create an event emitter object
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});

// Register the event
emitter.emit('messageLogged', { id: 1, url: 'http://test.com' });