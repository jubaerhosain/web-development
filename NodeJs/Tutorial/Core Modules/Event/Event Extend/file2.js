const School = require('./file1');

const school = new School();

// jei object diye event register korbo, sei object diyei event raise korte hobe
school.on('bellRing', (student) => {
    console.log("Hi, " + student.name + ". Class period is ended.");
});

school.startPeriod();