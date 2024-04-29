// 주어진 숫자만큼 반복하고, 반복되는 숫자들의 약수를 구한 뒤, 제한 값을 넘는다면 파워값으로 변경하고 모든 값 더한 결과값
function solution(number, limit, power) {
    const division = getDivision(number);

    return division.map(num => num > limit ? num = power : num).reduce((acc, cur) => acc + cur, 0);
}

function getDivision(number) {
    const divisors = new Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisors[j]++;
        }
    }

    return divisors.slice(1);
}

/**
 * 숫자를 인자로 받고, 약수를 구하는 getDivision 함수 생성
 * 새로운 약수 배열을 생성한 뒤, 모든 약수 값을 추가(첫 번째 0 값은 제외)
 * 해당 함수로부터 전달받은 약수값들 중 제한값보다 크면 파워 값으로 변경한 뒤 모두 더하기
 * 만약, 제한값을 넘는 약수가 없다면 기존 약수 값들 모두 더하기
 */