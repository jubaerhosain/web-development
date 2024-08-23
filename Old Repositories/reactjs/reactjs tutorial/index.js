let count = 0;

const button = document.getElementById("button");
const display = document.getElementById("display");

button.addEventListener("click", () => {
    count++;
    display.textContent = count;
});


