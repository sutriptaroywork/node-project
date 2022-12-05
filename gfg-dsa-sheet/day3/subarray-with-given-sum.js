function subArrayGivenSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for(let i = 0; i <= arr.length; i++) {
        while(currentSum > target && start < i) {
            currentSum -= arr[start];
            start += 1;
        }

        if(currentSum == target) {
            return [start + 1, i];
        }

        if(i < arr.length) {
            currentSum += arr[i];
        }
    }
    return -1
}

const arr = [1, 2, 3, 7, 11];
const target = 14
const subArrayWithTarget = subArrayGivenSum(arr, target);
console.log(subArrayWithTarget);

// here we need to find a subarray where the sum of the items will be the given sum.
// ex - given sum = 12, given array = [1, 2, 3, 7, 11]. So here [2, 3, 7] this is a sub array which has a sum of 12.
// the array consists of only non-negative numbers, so that we can check like this.
// so we have to take a sum variable with an initial value of 0 and we have to take a variable to store the start point.
// then we need to iterate the array and everytime we need to add the item with the sum variable and check if it is exceeding the target value.
// if the sum is exceeding the target value, we need to remove items from the starting point one by one untill the sum becomes less than or equal to the target.
// whenever we get the target, just return the starting point and the current point.


// here time complexity of the solution will be - O(n) and space complexity will be - O(1).
// as we are iterating the whole array, the time is directly dependent on the size of the array. So the time complexity will be O(n).
// as we are storing only the starting point that doesn't dependent on the size of the array, the space complexity will be O(1).
