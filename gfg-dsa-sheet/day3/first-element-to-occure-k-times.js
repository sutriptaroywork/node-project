function elementKtimes(arr, target) {
    const myMap = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(!myMap.get(arr[i])) {
            myMap.set(arr[i], 1);
        } else {
            let count = myMap.get(arr[i]);
            count += 1;
            if(count == target) {
                return arr[i];
            }
            myMap.set(arr[i], count);
        }
    }
    return -1
}

const arr = [2, 3, 4, 3, 5];
const target = 3
const itemMeetsTarget = elementKtimes(arr, target);
console.log(itemMeetsTarget);

// here we need to find a number that appears k times or the given times from an array.
// ex - we need to find a number that appears 3 times in an array.
// if there is more than one numbers that appears 3 times in an array, we need to take the number that completes the target first.
// ex - [2, 5, 4, 4, 5, 4, 5, 1]. here 4 and 5 both appears 3 times. but 4 completes the target first. So our answer will be 4, not 5.
// so to do this we have to iterate the array and every time we are getting the item, we will add the count into a hashmap and check if it completes the targetor not.
// whenever we get an item that completes the target, just return that.


// here time complexity of the solution will be - O(n) and space complexity will be - O(n).
// as we are iterating the whole array, the time is directly dependent on the size of the array. So the time complexity will be O(n).
// as we are storing item count into a hashmap. So the size of the hashmap is directly dependent on the size of the array. So the space complexity also will be O(n).
