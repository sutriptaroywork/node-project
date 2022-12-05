function binarySearch(arr, target) {
    let l = 0
    let r = arr.length - 1

    while(r >= l) {
        const mid = l + Math.floor((r - l) / 2);

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}

const arr = [2, 3, 4, 10, 40];
const target = 10
const index = binarySearch(arr, target);
console.log(index);

// here we need to find the given number from a sorted array.
// as it is a sorted array, we will use binary search.
// why binary search ? because binary search search an item by making the array size half on every iteration. So it takes lesser time than linear iteration search.
// so we will take two pointers, one for the starting of the array and another for the ending of the array.
// and then we will evaluate the mid point through the following formula - start + (end - start) / 2, NOTE - take only integer, ignore decimal.
// so everytime we will check that the mid point is greater than or lesser than our target.
// if it is greater, we will assign mid point as our end point. Else if mid point is lesser than the target, we will assign mid point as our start point.
// if we get our target on any mid point, we will return that index.


// here time complexity of the solution will be - O(logn) and space complexity will be - O(1).
// as it is binary search it is taking the time complexity of O(logn). Description of this can be found here - https://www.geeksforgeeks.org/complexity-analysis-of-binary-search/.
/* 
    Analysis of input size at each iteration of Binary Search:
        At Iteration 1: Length of array = n
        At Iteration 2: Length of array = n/2
        At Iteration 3: Length of array = (n/2)/2 = n/2^2

        Therefore, after Iteration k: Length of array = n/2^k

        Also, we know that after k iterations, the length of the array becomes 1 Therefore, the Length of the array 
        n/2k = 1
        => n = 2k
        Applying log function on both sides: 
        => log2(n) = log2(2^k)
        => log2(n) = k * log2(2)
        As (loga(a) = 1) Therefore, k = log2(n)

        So its taking log2(n) or log(n) time to becomes 1. So becoming 1 length of array is actually the answer of our searching. So that's why it is O(log(n))
*/
// as we are not using any extra space which is directly dependant on the size of the array, our space complexity is O(1).
