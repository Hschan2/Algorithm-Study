// 문제
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

// 출력
// 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

// 백준 기본 제공 입력값 코드. 문자열로 받기 
const array = require("fs").readFileSync("/dev/stdin", "utf8");

// 배열을 나열하고 띄어쓰기로 나누고 문자열을 숫자로 변환
const [firstValue, ...arrays] = array
    .trim()
    .split("\n")
    .map((value) => Number(value));

// 오름차순 정렬
const result = arrays.sort((a, b) => a - b);

// 나눈 배열을 합치기
console.log(result.join("\n"));