/**
 * 직사각형 좌표 구하기
 */

function solution(v) {
    var answer = [];
    
    // X축에 중복된 숫자를 체크하고, 중복된 숫자가 아닌 숫자를 결과 배열에 담기
    if (v[0][0] === v[2][0]) {
        answer.push(v[1][0]);
    } else if (v[1][0] === v[2][0]) {
        answer.push(v[0][0]);
    } else {
        answer.push(v[2][0]);
    }
    
    // Y축에 중복된 숫자를 체크하고, 중복된 숫자가 아닌 숫자를 결과 배열에 담기
    if (v[0][1] === v[1][1]) {
        answer.push(v[2][1]);
    } else if (v[1][1] === v[2][1]) {
        answer.push(v[0][1]);
    } else {
        answer.push(v[1][1]);
    }

    console.log('Hello Javascript')

    return answer;
}