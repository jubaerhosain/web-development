const nums = [1, 2, 3, 4];

const res = nums.reduce((prev, curr, index, arr) => {
    return prev + curr;
}, 0);

console.log(nums, res);