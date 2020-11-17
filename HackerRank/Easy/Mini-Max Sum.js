/**
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

The numbers are , , , , and . Calculate the following sums using four of the five integers:

Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Hints: Beware of integer overflow! Use 64-bit Integer.
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function asc(arr) {
    return arr.sort((a, b) => a - b);
}

function desc(arr) {
    return arr.sort((a, b) => b - a);
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    // sort() is not available in hackerRank
    // const minSort = arr.sort(function(a, b) {
    //     return a - b;
    // });
    // => [5,4,3,2,1]
    
    // const maxSort = arr.sort(function(a, b) {
    //     return b - a;
    // }); 
    // => [5,4,3,2,1]
    // => error
    
    // const arrCopy = [...arr];
    
    // const min = asc(arrCopy);
    // const max = desc(arrCopy);
    
    // hackerRank 내 sort가 제대로 동작하지 않음.

    let minValue = 0;
    let maxValue = 0;
    let numSum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        numSum = 0;
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) numSum += arr[j];
        }
        
        if(i === 0) {
            minValue = numSum;
            maxValue = numSum;
        } else {
            if(minValue > numSum) minValue = numSum;
            if(maxValue < numSum) maxValue = numSum;
        }
    }
    
    console.log(minValue + " " + maxValue);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
