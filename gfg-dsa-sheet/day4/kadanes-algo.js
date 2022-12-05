function kadanesAlgo(arr) {
    let currentMax = arr[0];
    let maxSoFar = arr[0];

    for(let i=1; i<arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar;
}

const arr = [1, 2, 3, -2, 5];
const maxSum = kadanesAlgo(arr);
console.log(maxSum);


// here we need to find the contiguous sub array with maximum sum.
// to do this, we are going to implement kadane's algo.
// according this algo, we need to use 2 variables. One for the current max and another one for maximum so far.
// every time we will first take maximu betwee that current item and the sum of current maximum and current item.
// next we will take the maximum between maximum till now and the current maximum.
// through this we can achieve our goal to find the contiguous sub array with maximum sum.


// here time complexity of the solution will be - O(n) and space complexity will be - O(1).
// as we are iterating the array once, the time is directly dependent upon the size of the array. So the time complexity will be O(n).
// as we are storing maximum value in 2 variables which are not depending upon the size of the array, the space complexity will be O(1).