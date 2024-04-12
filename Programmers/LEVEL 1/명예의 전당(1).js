// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 가수들의 점수 score에서 매일 발표되는 명예의 전당의 최하위 점수 구하기
function solution(k, score) {
    const result = [];
    const kArr = [];

    score.forEach((number) => {
        if (kArr.length < k) {
            kArr.push(number);
            kArr.sort((a, b) => a - b);
            result.push(kArr[0]);
        } else {
            if (number > kArr[0]) {
                kArr[0] = number;
                kArr.sort((a, b) => a - b);
                result.push(kArr[0]);
            } else {
                result.push(kArr[0]);
            }
        }
    })

    return result;
}

/**
 * 중복된 코드가 있으며, 가독성이 낮음
 * 다른 사람의 코드를 보고 학습
 */

// 개선된 해결 코드
function solution(k, score) {
    const result = [];
    const kArr = [];

    score.forEach((number) => {
        kArr.push(number);
        kArr.sort((a, b) => b - a);

        if (kArr.length >= k) {
            result.push(kArr[k - 1]);
        } else {
            result.push(kArr[kArr.length - 1]);
        }
    })

    return result;
}