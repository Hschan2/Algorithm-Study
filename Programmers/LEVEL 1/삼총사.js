// 배열 중 3개의 값을 구하면 0이 되는 횟수 구하기
function solution(number) {
    let result = 0;
    const length = number.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                if (number[i] + number[j] + number[k] === 0) result += 1;
            }
        }
    }

    return result;
}

/**
 * 중첩된 for 문을 사용한 것이 아쉬움
 * 다른 방법을 찾아봤지만, 대부분 중첩된 for 문을 사용
 * DFS 방법으로 해결 가능하다고 하여 시도 계획
 */