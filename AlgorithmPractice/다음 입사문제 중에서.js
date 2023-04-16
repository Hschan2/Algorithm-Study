/**
1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
 */

function solution(arr) {
    let index = 0;
    let minMin = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < minMin) {
            index = i;
            minMin = arr[i] - arr[i - 1];
        }
    }

    return [arr[index - 1], arr[index]];
}

solution([1, 3, 4, 8, 13, 17, 20]); // 3 4

function solution2(arr) {
    s = arr.slice(1);
    return arr.map((v, i) => [v, s[i]]).sort((a, b) => (a[1] - a[0] - (b[1] - b[0])))[0];
}