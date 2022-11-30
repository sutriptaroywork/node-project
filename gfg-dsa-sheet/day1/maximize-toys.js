function maximumNoOfToys(toyArr, moneyAvailable) {
    let totalToys = 0;
    toyArr.sort();

    for(let i=0; i<toyArr.length; i++) {
        if(moneyAvailable <= toyArr[i]) {
            totalToys += 1;
            moneyAvailable -= toyArr[i];
        }
    }
    return totalToys;

}

const toyArr = [1, 12, 5, 111, 200, 1000, 10];
const moneyAvailable = 50;

const noOfToys = maximumNoOfToys(toyArr, moneyAvailable);
console.log(noOfToys);


// here we are trying to find maximum numbers of toys we can buy with a given amount of money.
// as we need to find maximum numbers which have a sum of the given amount, we need to add smaller amounts as much as we can.
// that's why we sort the array and started to add, so that we can get the maximum number of items.

// so here space complexity = O(1) and time complexity = O(nlogn).
// as we are sorting the array which takes time of nlogn and then iterating the array with the time of n. It becomes O(nlogn) + O(n). Which becomes O(nlogn).
// as we are using one extra space with a single value and it doesn't depend upon the number of items of the array, it is O(1).