function makeRequest() {
    return new Promise((resolve) => {
        console.log(1);
        setTimeout(() => resolve({ status: "done" }), 1000);
    });
}

async function processInOrder() {
    console.time("Processing In Order");
    for (let i = 0; i < 5; i++) {
        await makeRequest();
    }
    console.timeEnd("Processing In Order");
    console.log("Processing In Order Complete");
    return;
}

processInOrder();
