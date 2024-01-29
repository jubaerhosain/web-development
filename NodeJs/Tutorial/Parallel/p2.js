function makeRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let i = 0;
            while (i < 100000000) i++;
            console.log(i);
            resolve({ status: "done" });
        }, 2000); 
    });
}

// run parallel
async function process(arrayOfPromises) {
    console.time(`process`);
    let responses = await Promise.all(arrayOfPromises);
    console.timeEnd(`process`);
}

// run serially
async function p0() {
    console.time(`p0`);
    await makeRequest();
    console.timeEnd(`p0`);
    return;
}


// run serially
async function p1() {
    console.time(`p1`);
    for (let i = 0; i < 5; i++) await makeRequest();
    console.timeEnd(`p1`);
}

async function handler() {
    let arrayOfPromises = [makeRequest(), makeRequest(), makeRequest(), makeRequest(), makeRequest()];
    await process(arrayOfPromises);
    console.log(`processing is complete`);
}



// p0();
// p1();
handler();