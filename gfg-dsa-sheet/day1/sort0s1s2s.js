function sort0s1s2s(arr) {
    let l = 0;
    let r = arr.length - 1;
    let mid = 0;

    while(mid <= r) {
        if(arr[mid] == 0) {
            [arr[l], arr[mid]] = [arr[mid], arr[l]];
            mid += 1;
            l += 1;
        } else if (arr[mid] == 1) {
            mid += 1
        } else {
            [arr[mid], arr[r]] = [arr[r], arr[mid]]
            r -= 1;
        }
    }
    return arr;

}

const arr = [0, 2, 1, 2, 0, 1];

const sortedArr = sort0s1s2s(arr);
console.log(sortedArr);


// here we are trying to sort an array of items in 0,1,2 manner.
// as we need to track all the different types and we have three types of items, we are taking 3 different variables to store the track.
// to achieve that, we will iterate the array by using a while loop untill our 3rd variable or highest variable becomes same with midium variable of 2nd variable.
// we will check the array item that is pointing by the "mid" variable everytime.
// if it is 0, we will swap the low and mid positioned item and increase both the variable by 1.
// if it is 1, we will just increase the mid variable by 1 and do nothing.
// if we get 2, we will swap high and mid positioned items and decrease high by 1.

// so here space complexity = O(1) and time complexity = O(n).
// as we are not using any extra space, it will be a space complexity of O(1).
// as we are iterating the array once, the time complexity will be O(n).
