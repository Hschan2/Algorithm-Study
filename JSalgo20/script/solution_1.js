/**
문제 설명
왕좌에 앉으려는 자! 자격을 증명하라!
알고리즘 왕좌에 앉으려는 자는 자격을 증명해야 합니다. 만약 이 테스트를 '스스로' 통과하지 못한다면, 기본 문법을 다시 공부하고 와야 합니다. 앞으로 이보다 쉬운 문제는 없으니까요.

파이와 썬은 모든 알고리즘을 해독할 수 있는 알고리즘 7원석을 세계 어딘가에 숨겨두었다 공표하였습니다. 험난한 시련을 딛고 일어선 자만 이 시험을 통과할 수 있도록 설계되었습니다. 그가 남긴 문자는 아래와 같습니다.

자격을 얻으려는 자! 이곳으로 향하라!

"  + +-+ -+-  "
"  ++ -- +-+  "
"  ++-+ -+ -  "
"  + ++-+ -+  "

해(1)와 달(0),
Code의 세상 안으로! (En-Coding)

주어진 문자열을 1과 0으로 바꾸고 아스키 코드표 안에 문자로 바꾸세요.

제한 사항
65 ≤ 문자열을 10진수로 변경한 숫자 ≤ 122
문자열은 +, -, 공백 외에는 주어지지 않습니다.
각각의 문자열은 1차원 리스트로 주어집니다.
공백은 주어질 수도 있고, 주어지지 않을 수도 있습니다.
입출력 예
입력	출력
[' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - ']	'Jun'
[' + + + - - + + ', ' + + + - + - - ', '++----+', '+++ --+ -', '+++-+ - -']	'start'
[' + + - - - - + ', ' + + - + + - - ', '+ +-- +++ ', ' ++- ++++']	'algo'
입출력 설명
+는 1로, -는 0으로 변경되어 ' + - - + - + - '는 1001010이 됩니다. 이 숫자는 10진수로 바꾸었을 때 74로 아스키 코드표로 보면 대문자 J가 됩니다. 이와 같은 원리로 나머지 2개를 문자로 바꿔 조합하면 'Jun'이 됩니다.

 */

function solution(data) {
    const result = [];

    for (let i = 0; i < data.length; i++) {
        const trimmedData = data[i].trim();
        let ascii = '';

        for (let j = 0; j < trimmedData.length; j++) {
            if (trimmedData[j] === '+') {
                ascii += '1';
            } else if (trimmedData[j] === '-') {
                ascii += '0';
            }
        }

        if (ascii !== '') {
            result.push(String.fromCharCode(parseInt(ascii, 2)));
        }
    }

    return result.join('');
}


const input_1 = [' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - '];
const input_2 = [' + + + - - + + ', ' + + + - + - - ', '++----+', '+++ --+ -', '+++-+ - -'];
const input_3 = [' + + - - - - + ', ' + + - + + - - ', '+ +-- +++ ', ' ++- ++++'];

console.log(solution(input_1));
console.log(solution(input_2));
console.log(solution(input_3));

function correct(data) {
    let result = ''

    for (let i of data) {
        i = parseInt(i.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2)
        result += String.fromCharCode(i);
    }

    return result;
}