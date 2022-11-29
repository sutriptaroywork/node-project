function findUncommon(str1, str2) {
    let charStr = "";
    const freq1 = new Map();
    const freq2 = new Map();

    for(let i=0; i<26; i++) {
        freq1.set(i, false);
        freq2.set(i, false);
    }

    for(let i=0; i<str1.length; i++) {
        freq1.set(str1.charCodeAt(i) - 'a'.charCodeAt(0), true);
    }

    for(let i=0; i<str2.length; i++) {
        freq2.set(str2.charCodeAt(i) - 'a'.charCodeAt(0), true);
    }

    for(let i=0; i<26; i++) {
        if(freq1.get(i) ^ freq2.get(i)) {
            charStr += String.fromCharCode('a'.charCodeAt(0) + i)
        }
    }
    return charStr;

}

const str2 = "geeksforgeeks";
const str1 = "geeksquiz";

const uncommonCharacters = findUncommon(str1, str2);
console.log(uncommonCharacters);


// here we are compairing the 2nd string with the 1st string.
// first we have used hashmap to store the characters of the 1st string.
// then we just check is there any character in the 2nd string which is not present in the hashmap i.e. in the 1st string ?
// if it is, we pushed that into the array and return that array
// so here is the str1 = "geeksforgeeks" and str2 = "geeks", there will be an empty array as all the characters in the 2nd string is there in the 1st string.
// but if we do, str2 = "geeksforgeeks" and str1 = "geeks", there will an array like this - ['f', 'o', 'r'].
// Because teh 2nd string does have "for", which is not present into the 1st string.


// so here space complexity = O(n) and time complexity = O(n).
// as there is no nested for loop, the time complexity will be O(n).
// as we are using an array to store our final values, it will be a space complexity of O(n).
