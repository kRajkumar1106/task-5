// 1. Print odd Number

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(number) {
    if (number % 2 !== 0) {
        console.log(number);
    }
});

// 2. Convert String

const stringArray = ["hello js", "javascript ", "coding is fun"];

const titleCaseArray = stringArray.map(function(string) {
    return string
        .split(" ")
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
});

console.log(titleCaseArray);

// 3. sum of all numbers in an array using

const num = [1, 2, 3, 4, 5];

const sum = num.reduce(function(a, b) {
    return a + b;
});

console.log(sum);

// 4. Return of all prime in an array using

const primeNum = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = numbers.filter(function(primeNum) {
    if (primeNum < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            return false;
        }
    }

    return true;
});

console.log(primes);

// 5. Return of all palindromes in an array using

const findPalindromes = arr => {
    return arr.filter(word => {
        const reversedWord = word.toLowerCase().split("").reverse().join("");
        return word.toLowerCase() === reversedWord;
    });
};

const words = ["level", "hello", "world", "madam"];
const palindromes = findPalindromes(words);
console.log(palindromes);

// 5. Return median of two sorted arrays of the same size

const findMedian = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const midIndex = Math.floor(mergedArray.length / 2);

    if (mergedArray.length % 2 === 0) {
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        return mergedArray[midIndex];
    }
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = findMedian(arr1, arr2);
console.log(median);

// 6. Remove duplicates from an array

const arr = [1, 2, 3, 4, 2, 3, 5, 6, 1, 4, 5];

const uniqueArr = arr.filter(function(value, index) {
    return arr.indexOf(value) === index;
});

console.log(uniqueArr);

// 7. Rotate an array by k times

const rotateArray = (arr, k) => {
    const rotationIndex = k % arr.length;

    return (function() {
        return arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));
    })();
};

const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray);