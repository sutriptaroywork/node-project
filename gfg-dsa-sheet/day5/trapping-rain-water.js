function trappingRainWater(arr) {
    const leftHighest = [];
    const rightHighest = [];
    let maxTillNow = -1;
    let trappedWaterBlocks = 0;

    for (let i = 0; i < arr.length; i++) {
        maxTillNow = Math.max(maxTillNow, arr[i]);
        leftHighest.push(Math.max(maxTillNow, arr[i]));
    }

    maxTillNow = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        maxTillNow = Math.max(maxTillNow, arr[i]);
        rightHighest.push(Math.max(maxTillNow, arr[i]));
    }

    rightHighest.reverse();

    for (let i = 0; i < arr.length; i++) {
        trappedWaterBlocks += Math.min(leftHighest[i], rightHighest[i]) - arr[i];
    }

    return trappedWaterBlocks;
}

// const arr = [3,0,0,2,0,4];
const arr = [1, 1, 5, 2, 7, 6, 1, 4, 2, 3]
const noOfBlocksOfWater = trappingRainWater(arr);
console.log(noOfBlocksOfWater);


// here we need to find the number of units rain water can be trapped by the given array of blocks.
// so the main concept here is to get the highest left block till now vs highest right block till now.
// get the minimum number between left highest and right highest and subtract the current index value from that.
// so first we need to iterate the array two times to make the left highest and right highest arrays.
// after that we need to iterate and compare and subtract.


// here time complexity of the solution will be - O(n) and space complexity will be - O(n).
// as we are iterating, the time is directly dependent upon the size of the array. So the time complexity will be O(n).
// as we are using variables to store data which is directly dependent on the size of the array, the space complexity will be O(n).

// Video Link - https://www.youtube.com/watch?v=UZG3-vZlFM4
