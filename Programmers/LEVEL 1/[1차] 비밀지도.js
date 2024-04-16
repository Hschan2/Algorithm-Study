// arr1, arr2 배열의 자릿수 합이 0이면 ' ', 0이 아니면 '#'으로 표현하기
function solution(n, arr1, arr2) {
    arr1 = arr1.map(v => v.toString(2).padStart(n, '0'));
    arr2 = arr2.map(v => v.toString(2).padStart(n, '0'));

    const sum = arr1.map((v, i) => +v + +arr2[i]);
    const result = sum.map(v => v.toString().padStart(n, '0'));

    return result.map(v => [...v].map(n => n === '0' ? ' ' : '#').join(''));
}

/**
 * 각 배열의 값을 2진수로 변경 후, n의 자리수를 맞추기 위해 0으로 채운다.
 * arr1, arr2의 배열을 숫자로 변환 후 더한다.
 * 숫자로 변환하는 과정에서 맨 앞이 0일 경우 제거된 것을 다시 0으로 채운다.
 * 더한 값의 각 자릿수가 0이면 ' ', 0 이상이면 '#'으로 변환한 뒤, join 한다.
 */

// 다른 사람 풀이
var solution = (n, arr1, arr2) => arr1.map((a, i) => (a | arr2[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'))

/**
 * arr1 배열을 map()으로 반복하여 각 요소 값과 arr2 배열을 OR 연산한다.
 * padStart() 메소드로 n의 자릿수만큼 0으로 채운다.
 * 정규표현식으로 0과 1을 찾아 replace() 메소드로 0은 ' ', 1은 '#'으로 변환한다.
 * 
 * 나는 정규표현식을 사용하지 않고 처리하려고 했다.
 * 그렇지만, 정규표현식을 사용함으로써 더 간단하게 처리하도록 한 것에 정규표현식에 대해 생각을 바꾸게 됐다.
 * 그리고 OR 연산으로 처리하는 방법을 이번 기회에 배웠다.
 * (OR 연산은 각 값들을 2진수로 인식하고 두 개의 값 중 하나라도 1이면 1, 둘 다 0 이면 0으로 처리한 뒤, 다시 10진수로 나타냄)
 */

// OR 연산을 활용한 내 코드 수정
function solution(n, arr1, arr2) {
    const arr = arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, 0));

    return arr.map(v => [...v].map(n => n === '0' ? ' ' : '#').join(''));
}