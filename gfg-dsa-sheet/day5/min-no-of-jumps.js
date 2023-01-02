function minNoOfJumpsToEnd(arr) {
    if (arr.length <= 1) {
        return 0;
    }
    if (arr[0] === 0) {
        return -1;
    }
    let steps = arr[0];
    let maxReach = arr[0];
    let totalJumps = 1;

    for (let i = 1; i < arr.length; i++) {
        if ((maxReach >= arr.length - 1) || (i === arr.length - 1)) {
            if (i + steps < arr.length - 1) {
                totalJumps++;
            }
            return totalJumps;
        }
        maxReach = Math.max(maxReach, i + arr[i]);
        steps--;

        if (steps === 0) {
            totalJumps++;

            if (i >= maxReach) {
                return -1;
            }
            steps = maxReach - i;
        }
    }

    return -1;
}

const arr = [1, 3, 5, 8, 0, 2, 6, 7, 6, 8, 9];
const noOfJumps = minNoOfJumpsToEnd(arr);
console.log(noOfJumps);


// here we need to find the number of minimum jumps needed to go to the end of the array.
// here each number represents how much maximum you can jump ahead.
// so on index 1, you have 3. So you can jump maximum 3 indexes. That means you can jump 1 index or 2 indexes or 3 indexes.
// so every time we are storing the maximum next jump into the "maxReach" variable.
// every time we are out of jumps, we are adding 1 with "totalJumps".
// whenever we are reaching to the end, we are returning the "totalJumps". If we are unable to reach at the end, we are returning -1.


// here time complexity of the solution will be - O(n) and space complexity will be - O(1).
// as we are iterating the array once, the time is directly dependent upon the size of the array. So the time complexity will be O(n).
// as we are using 3 variables to store data where the number of data storing is not directly dependent on the size of the array, the space complexity will be O(1).
