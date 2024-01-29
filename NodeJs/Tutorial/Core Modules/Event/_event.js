// returns a class
const EventEmitter = require("events");

const emitter = new EventEmitter();

// register an event before raising it
emitter.on("myEvent", (name, age) => {
    console.log("Event Raised! " + name + " " + age);
});

emitter.on("event1", (student) => {
    console.log(student.name);
});


// raise events by event name
emitter.emit("myEvent", "Jubaer", 23);

emitter.emit("event1", {
    name: "Md. Jubaer Hosain",
    age: 23,
    address: "Amr Ekushey Hall, DU",
});
