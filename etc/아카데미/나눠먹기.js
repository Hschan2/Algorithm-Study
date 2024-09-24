/**
 * 나눠먹기
 * 주어진 아이템을 두 명이서 똑같이 나눠 먹을 수 있도록 합니다.
 * 배열의 첫 번째는 물을 의미하며, 무조건 1입니다.
 * 물은 두 사람 사이에 둡니다.
 * 만약, 홀수일 경우 나머지 한 개는 버려집니다.
 */

function solution(arr) {
    let saveCount = ""
    for (let i = 1; i < arr.length; i++) {
        const half = parseInt(arr[i] / 2);
        for (let j = 0; j < half; j++) {
            saveCount += String(i);
        }
    }

    const reverseCount = saveCount.split("").reverse().join("");

    return saveCount + "0" + reverseCount;
}

const items = [1, 3, 4, 6];
solution(items);