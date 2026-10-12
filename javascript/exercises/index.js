function factorial(n) {
    console.log('n ===>', n);
    if (n < 0) return;
    if (n === 0 || n === 1) return 1;
    const res = n * factorial(n - 1);
    console.log('res ======>', res);
    return res;
}

const n = 4;
const res = factorial(n);
console.log(res);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Type something (Ctrl+C to exit):');

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
});


function getSecondLargest(nums) {
    // Complete the function
    // Sort the array in descending order
    nums.sort((a, b) => b - a);

    // Find the first value that is smaller than the largest
    const largest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== largest) {
            return nums[i];
        }
    }
}