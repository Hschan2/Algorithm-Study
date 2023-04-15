/**
문자열을 입력받아서, 같은 문자가 연속적으로 반복되는 경우에 그 반복 횟수를 표시하여 문자열을 압축하기.

입력 예시: aaabbcccccca

출력 예시: a3b2c6a1
 */

function solution(str) {
    let result = str[0];
    let count = 0;

    for (let s of str) {
        if (s === result.slice(-1)) {
            count += 1;
        } else {
            result += count + s;
            count = 1;
        }
    }

    result += count;

    return result;
}

solution('aaabbcccccca'); // a3b2c6a1

function solution2(str) {
    const reg = '/(\w)\1*/g';

    return [...str.matchAll(reg)];
}