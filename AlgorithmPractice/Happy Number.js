/**
== 문제 설명 ==
양의 정수 S0 의 각 아라비아 숫자들의 제곱의 합으로 양의 정수 S1을 만든다고 하자.

동일한 방법이라면, S1으로 S2를 만들 수 있고, 이 후로도 계속 만들 수 있다.

만약 어떤 i(i ≥ 1)에 대해서 Si = 1이라면, 최초의 S0를 Happy Number라고 부른다.

Happy Number가 아닌 수를 Unhappy Number라고 부른다.

예를 들어, 7에서 시작하게 되면 다음과 같은 일련의 순서를 가지게 되며

7, 49(=7^2), 97(=4^2+9^2), 130(=9^2+7^2), 10(=1^2+3^2), 1(=1^2),

따라서 7은 즐거운 수이다.

그리고 4는

4, 16(4^2), 37(1^2+6^2), 58(3^2+7^2), 89(5^2+8^2), 145(8^2+9^2),

42(1^2+4^2+5^2), 20(4^2+2^2), 4(2^2)의 순서로 반복되므로 Unhappy Number이다.

== 입력 ==
첫 라인은 인풋 케이스의 수 n이 주어지며 이후 n라인의 케이스가 주어진다.

각 테스트 케이스는 한 개의 양의 정수 N으로 구성되며 N은 10^9 보다 작다.

== 출력 ==
출력은 주어진 수 N이 Happy Number인지 Unhappy Number인지 여부에 따라 다음과 같이 출력한다.

N이 Happy Number라면 “Case #p: N is a Happy number.”

N이 Unhappy Number라면 “Case #p: N is an Unhappy number.”

p는 1부터 시작하는 케이스의 번호이며 각각의 케이스는 한 줄에 결과를 표시한다.

== 샘플 인풋 ==
3

7

4

13

== 샘플 출력 ==
Case #1: 7 is a Happy number.

Case #2: 4 is an Unhappy number.

Case #3: 13 is a Happy number.

== 채점 기준 ==
작성한 프로그램은 각각의 테스트케이스에 대해서 올바른 결과를 출력하여야 한다.

입력 후 결과 출력까지 걸리는 시간이 빠르면 빠를수록 좋다.

(* 이번 문제는 정확한 결과만큼이나 속도도 중요합니다)

프로그램에서 사용한 자료구조 및 알고리즘이 적절하여야 한다.

그 외 일반적인 코드 구조, 스타일, 에러/예외 처리 등이 적절할수록 좋다.

UVA 10591 문제이고, 이스트소프트 개발직군 샘플문제로 공개된 자료를 가져왔습니다. 채점기준을 준수한다면 난이도는 좀 더 상승될 것 같습니다.

채점기준에서 속도가 중요하다 했는데, 대부분의 수들이 길지 않은 싸이클로 반복하다보니 처리시간은 순식간입니다. 수십, 수백만개의 Case에 대해 처리시간을 체크해봐야 차이가 날것 같습니다.
*/

function solution(input) {
    let willSum = []
    let alreadySum = input
    let squareSumList = []
    while (alreadySum != '1') {
        for (let i of alreadySum) {
            let squareQuery = parseInt(i) ** 2 // 예. 14, 1 ** 2, 4 ** 2
            willSum.push(squareQuery)
        }
        alreadySum = String(willSum.reduce((a, b) => a + b, 0))
        willSum = []
        if (alreadySum == input) return false
        for (let i of squareSumList) {
            if (i === alreadySum) return false
        }
        squareSumList.push(alreadySum)
    }

    return true
}

solution('7') // true
solution('4') // false

let textCase = [3, 7, 4, 13]
for (let i = 0; i < textCase.length; i++) {
    if (solution(String(textCase[i]))) console.log(`Case ${i + 1}: ${textCase[i]} is a Happy number.`)
    else console.log(`Case ${i + 1}: ${textCase[i]} is a Unhappy number.`)
}