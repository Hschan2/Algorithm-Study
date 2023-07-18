/**
 * 소문자 문자열 대문자로 출력하기
 * 주어진 문자열이 대문자면 그대로 출력, 소문자면 대문자로 출력
 */

function solution(s) {
    return s === s.toUpperCase() ? s : s.toLowerCase();
}