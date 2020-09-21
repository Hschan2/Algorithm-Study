/**
가운데 글자 가져오기
문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
입출력 예
s	    return
abcde	c
qwer	we
 */

function solution(s) {
    if(s.length % 2 == 0) { // 문자열이 짝수면
        let len = s.length;
        let result =  s.substr(len / 2 - 1, 2); // 문자열의 가운데에서 -1뺀 위치부터 2개
        return result;
    } else { // 문자열이 홀수면
        let len = s.length;
        let result =  s.substr(len / 2, 1); // 문자열을 반으로 나누고 그 위치에서 1개
        return result;
    }
}