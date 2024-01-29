// Pub/Sub Module
const EventEmitter = require('events');

class PubSub extends EventEmitter {
  constructor() {
    super();
  }

  publish(eventName, data) {
    this.emit(eventName, data);
  }

  subscribe(eventName, listener) {
    this.on(eventName, listener);
  }

  unsubscribe(eventName, listener) {
    this.removeListener(eventName, listener);
  }
}

// Create an instance of the Pub/Sub module
const pubSub = new PubSub();

// Subscriber function to handle the 'message' event
const messageHandler = (data) => {
  console.log('Received message:', data);
};

// Subscribe the handler to the 'message' event
pubSub.subscribe('message', messageHandler);

// Publish a message to the 'message' event
pubSub.publish('message', 'Hello, Pub/Sub pattern in Node.js!');

// Unsubscribe the handler from the 'message' event
pubSub.unsubscribe('message', messageHandler);

// Publish the same message again, but the subscriber won't receive it as it's unsubscribed
pubSub.publish('message', 'This message will not be received.');

// Output:
// Received message: Hello, Pub/Sub pattern in Node.js!

