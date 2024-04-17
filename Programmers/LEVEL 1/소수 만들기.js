// nums 배열에서 3개의 숫자를 더한 값이 소수인지 판별하기
function solution(nums) {
    const sum = [];

    for (let i = 0; i < nums.length; i++) { // nums.length - 2로 바꾸기
        for (let j = i + 1; j < nums.length; j++) { // nums.length - 1로 바꾸기
            for (let k = j + 1; k < nums.length; k++) {
                sum.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }

    return sum.filter(n => getDecimal(n)).length;
}

function getDecimal(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

/**
 * 3개의 숫자를 합할 수 있는 모든 경우의 수를 구하기 위해 for 문 3개 중첩 사용
 * 3개를 더한 모든 값을 sum 배열에 추가
 * sum 배열의 값들을 모두 반복하여 소수인지 판별하는 getDecimal 함수 생성
 * 소수이면 true, 아니면 false를 반환하여 최종 소수 값만 필터링 후 갯수 반환
 * 
 * 보완할 점 - 모든 for 문을 nums.length로 반복한 점 → - 2, - 1을 하여 필요한 갯수만큼만 반복하도록 하기
 */

// 다른 사람 풀이
function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                answer++;

                for (let n = 2; n <= Math.sqrt(sum); n++) {
                    if (sum % n === 0) {
                        answer--;
                        break;
                    }
                }
            }
        }
    }

    return answer;
}

/**
 * 전체적으로 비슷하나, 소수 판별 시, 'Math.sqrt'를 사용한 점
 */