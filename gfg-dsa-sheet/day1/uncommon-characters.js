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


// here we are first taking two constant hashmaps of 26 items with all the value - "False".
// as english can have maximum 26 characters, we are taking the length of 26.
// then we are iterating two loops to get all the characters of the two strings.
// then everytime, we are getting the distance of the character from "a" by subtracting the ASCII code of "a" from the ASCII code of that character.
// everytime we are storing "True" to the item in hashmap with that difference.
// at the end, we are comparing both the hashmaps by using XOR checking.
// XOR returns "true", if both are different.
// So if a charactar is true in one of those two hashmaps, then only it will give true.
// if it is present or missing in both the cases i.e. same in both the cases, it returns false.
// so trough this we can avle to acheive the different characters of the two strings.


// so here space complexity = O(1) and time complexity = O(n + m).
// as there is no nested for loop, the time complexity will be O(n + m) i.e. the length of two arrays.
// as we are using two hashmaps which have a length of 26 each, the length of the hashmap is fixed. so the space complexity is constant i.e. O(1). 
