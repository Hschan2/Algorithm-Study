/**
 * 피보나치 수열을 구하는 함수를 작성하시오.
 */

function fibonacciSequence(arr) {
    const fibonacci = [arr[0], arr[1]]; // 초기값으로 배열의 첫 번째와 두 번째 요소를 설정
    
    for (let i = 2; i < arr.length; i++) {
        const sum = fibonacci[i - 2] + fibonacci[i - 1]; // 현재 요소의 앞 두 요소를 더해서 피보나치 수열 값을 구함
        fibonacci.push(sum); // 피보나치 수열 값을 배열에 추가
    }
    
    return fibonacci;
}

const arr = [1, -5, 10, 0, 5, 15];
console.log(fibonacciSequence(arr));
