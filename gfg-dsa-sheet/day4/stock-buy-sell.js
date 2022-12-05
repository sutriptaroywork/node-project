function stockBuySell(arr) {
    const ans = [];

    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] < arr[i+1]) {
            ans.push([i, i+1])
        }
    }
    return ans;
}

const arr = [100, 180, 260, 310, 40, 535, 695];
const itemsList = stockBuySell(arr);
console.log(itemsList);

// here we need to find all the value pairs where the first value is less than the second.
// so we have an array where we have a list of stock prices on each day.
// we need to find all the occurance where you can make profit.
// so if you buy on a day and sell another day with higher price i.e. if the value of the current item is less than the next item, both index pair should be returned.


// here time complexity of the solution will be - O(n) and space complexity will be - O(n).
// as we are iterating the whole array, the time is directly dependent on the size of the array. So the time complexity will be O(n).
// as we are storing value pairs on a list where the size of the list is directly dependent on the size of the array, the space complexity will be O(n).
