/**
다음과 같은 형태의 배열을

[a1,a2,a3...,an,b1,b2...bn]

다음과 같은 형태로 바꾸시오

[a1,b1,a2,b2.....an,bn]
*/

function solution() {
    const list = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5']
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    // zip 사용 예.
    zip([1, 2, 3, 4, 5], [10, 20, 30, 40, 50]); // [1, 10], [2, 20], [3, 30], [4, 40], [5, 50]
    zip([1, 2, 3, 4, 5], 'hello'); // [1, 'h'], [2, 'e'], [3, 'l'], [4, 'l'], [5, 'o']

    const l1 = list.slice(0, list.length / 2);
    const l2 = list.slice(list.length / 2);
    const result = zip(l1, l2).flat(2); // ['a1', 'b1', 'a2', 'b2', 'a3', 'b3', 'a4', 'b4', 'a5', 'b5']

    return result;
}
