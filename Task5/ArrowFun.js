// 1. Print odd Number

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => {
    if (number % 2 !== 0) {
        console.log(number);
    }
});

// 2. Convert String

const stringArray = ["hello js", "javascript ", "coding is fun"];

const titleCaseArray = stringArray.map((string) => {
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

const sum = num.reduce((a, b) => {
    return a + b;
});

console.log(sum);

// 4. Return of all prime in an array using

const primeNum = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primes = numbers.filter((primeNum) => {
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