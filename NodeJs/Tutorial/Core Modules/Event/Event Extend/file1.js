const Event = require("events");

class School extends Event {
    startPeriod() {
        console.log("Period started.");
        setTimeout(() => {
            this.emit("bellRing", {
                name: "Md. Jubaer Hosain",
                age: 23,
                religion: "Islam",
            });
        }, 2000);
    }
}

module.exports = School;