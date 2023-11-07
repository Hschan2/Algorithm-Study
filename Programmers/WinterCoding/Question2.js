/**
간략 문제 설명

숫자가 주어진다.

조건은 다음과 같다.
2 ~ 10진수까지 변환 과정이 있다.
A진수 변환된 N 길이만큼 왼쪽부터 0부터 순서대로 나타낸다.
A진수 변환된 값의 각 자리의 값을 각 순서의 위치 값에 카운트한다.
A진수 변환된 값과 카운트된 값이 같으면 해당 진수를 반환한다.

만약, 해당되는 진수가 없다면 -1을 반환하라.

예.
100을 4진수로 나타내면 1210이 된다.
1210의 길이만큼 0, 1, 2, 3이 나열된다.
0은 1개, 1은 2개, 2는 1개, 3은 0개이기 때문에 다음과 같아진다.

0   1   2   3
1   2   1   0

결과적으로 100을 4진수로 나타낸 값 1210과 위의 나열된 값인 1210이 같기 때문에 4진수의 4를 반환한다.

*/

function solution(value) {
    for (let i = 2; i <= 10; i++) {
        const quaternary = value.toString(i);
        const digitCounts = Array(quaternary.length).fill(0);

        for (const digit of quaternary) {
            digitCounts[parseInt(digit)]++;
        }

        if (Number(quaternary) === Number(digitCounts.join(""))) {
            return i;
        }
    }

    return -1;
}
