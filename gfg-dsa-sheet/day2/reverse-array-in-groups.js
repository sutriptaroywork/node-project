function reverseInGroups(arr, group) {
    for(let i=0; i<arr.length; i += group) {
        l = i;
        hi = i - 1 + group;

        if(hi > arr.length - 1) {
            hi = arr.length - 1;
        }

        while(l < hi) {
            [arr[l], arr[hi]] = [arr[hi], arr[l]];
            l += 1;
            hi -= 1;
        }
    }
    return arr;

}

const arr = [1, 2, 3, 4, 5];
const group = 3;

const reverseArr = reverseInGroups(arr, group);
console.log(reverseArr);


// here we need to reverse the items of an array in groups. a bit confusing ? let's understand it!
// so reverse in groups means, reversing an array by diving in groups and reversing those groups. let's check an example.
// example - arr = [1,2,3,4,5]. And the group size is 3. So the answer will be [3,2,1,5,4].
// as our group size is 3, we take first 3 items and reverse them, then we take another 3 item and do the same and the same process will continus.
// if your last group is less than the group number, use the less numbered group.
// Like in our example the last group i.e. the second group is of 2 items, which is less than 3.
// so we take that 2 groups and swap accordingly.
// so basically if we rephrase the problem, it will be reverse array in groups where groups will consist of the given item number of items or less.

// here the time complexity is O(n) and space complexity is O(1).
// as we are iterating the array, it has a time compleity of O(n).
// as no extra space is using, it has constant space complexity or O(1).
