// (최저 사과 점수) x (한 상자에 담긴 사과 개수(m)) x (상자의 개수) 값 구하기
// 사과 최대 점수 k, 한 사앚에 들어가는 사과의 수 m, 사과들 점수 score
function solution(k, m, score) {
    const scoreSort = score.sort((a, b) => b - a);
    const splitScore = splitIntoChunk(scoreSort, m);
    let result = 0;

    splitScore.map(arr => {
        if (arr.length === m) {
            result += Math.min(...arr) * arr.length;
        }
    });

    return result;
}

function splitIntoChunk(arr, chunk) {
    const result = [];

    for (let i = 0; i < arr.length; i += chunk) {
        let tempArr;

        tempArr = arr.slice(i, i + chunk);
        result.push(tempArr);
    }

    return result;
}

/**
 * score를 내림차순으로 정렬(가장 높은 점수를 시작으로)
 * 정렬된 배열을 m개씩 나누기
 * 나눈 배열들의 길이가 m인 경우에만 계산하여 더하기
 */

// 다른 사람 풀이 - 1
function solution(k, m, score) {
    let answer = 0;

    let temp = score.sort((a, b) => (b - a));
    for (let i = m; i <= temp.length; i = i + m) {
        answer += temp[i - 1] * m;
    }
    return answer;
}

/**
 * 정렬하는 것은 같았음
 * m번 째 값들만 순회해 더해주는 방식으로 해결
 */

// 다른 사람 풀이 - 2
function solution(k, m, score) {
    score.sort((a, b) => b - a);

    const repeat = parseInt(score.length / m);
    let sum = 0;

    for (let i = m - 1; i < m * repeat; i += m) {
        sum += score[i];
    }
    return sum * m;
}

/**
 * 내림차순으로 정렬
 * 배열에서 m만큼 끊어서 한 상자에 담기
 * 상자마다 마지막 요소의 합을 구한 뒤 m 곱하기
 * 
 * repeat: 반복 횟수, 몇 개의 요소를 뽑아서 더할 것인가
 * for loop: 변수 i → m - 1에서 시작, 조건 → repeat 횟수만큼, 증감 → m만큼
 */

// 다른 사람 풀이 - 3
function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}

/**
 * .slice()로 복사해 sort()로 오름차순 정렬 뒤, 배애ㅕㄹ 앞부분의 남는 사과를 버리고 반복문 돌린 해결방법
 */