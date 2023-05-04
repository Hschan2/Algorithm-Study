/**
 * 출금과 입금이 마이너스일 경우가 얼만큼인지 알고리즘을 작성하라
 * 통장에 입금되는 금액과 출금되는 금액을 계산해 잔액이 마이너스가 되는 경우의 횟수를 출력하라
 * 
 * 예.
 * 출금 -100
 * 입금 100
 * 출금 - 100
 * 입금 100
 * 
 * 결과: 2
 */

function solution(money) {
    let count = 0;
    let remain = 0;

    for (let i = 0; i < money.length; i++) {
        remain += money[i];

        if (remain < 0) count += 1;
    }

    return count;
}

// 리팩토링
function solutionRefactoring(money) {
    let count = 0;
    let remain = 0;

    for (const m of money) {
        remain += m;
        if (remain < 0) count++;
    }

    return count;
}
