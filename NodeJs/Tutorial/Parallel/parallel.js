function makeRequest(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let i = 0;
            while (i < n) {
                i++;
            }
            console.log(i);
        });
    });
}

const arrayOfPromises = [makeRequest(100000000), makeRequest(100000000), makeRequest(100000000)];

async function processParallel(arrayOfPromises) {
    console.time("Processing Parallel");
    await Promise.all(arrayOfPromises);
    console.timeEnd("Processing Parallel");
    console.log("Processing Parallel Complete  \n");
    return;
}

processParallel(arrayOfPromises);
