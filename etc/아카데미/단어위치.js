/**
 * 주어진 문자열에서 똑같은 단어가 있는지 확인한다.
 * 만약, 현재 문자 앞에 같은 단어가 없다면 -1
 * 반대로 현재 문자 앞에 같은 단어가 있다면 각 사이의 차이를 담는다.
 */

function solution(s) {
    const result = [];
    const words = {};

    for (let i = 0; i < s.length; i++) {
        const word = s[i];

        if (words[word]) {
            result.push(i - words[word])
        } else {
            result.push(-1);
        }

        words[word] = i;
    }

    return result;
}

const text = "banana";
solution(text);