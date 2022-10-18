const numbers = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// Set() - 중복 허용하지 않음
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log(mySet); // Set(2) { 1, 2 } - 숫자 2의 중복을 허용하지 않음

const uniqueNumbers = [...new Set(numbers)]; // 초기화
console.log(uniqueNumbers); // [ 1, 2, 3, 6, 7, 8, 9 ] - 중복 제거

// -------------------------------------------------------------------

// indexOf()
console.log(numbers.indexOf(6)); // 3, 3의 값을 가지고 있는 첫 번째 인덱스 값 반환
const uniqueNumbers2 = numbers.filter((item, position) => {
    return numbers.indexOf(item) === position; // indexOf를 통해 반환된 인덱스 값과 Position 값이 같은가?
});

console.log(uniqueNumbers2); // [ 1, 2, 3, 6, 7, 8, 9 ] - 중복 제거

/**
    Position    indexOf     Result
1   0           0           1
2   1           1           2
3   2           2           3
6   3           3           6
6   4           3           
7   5           5           7
2   6           1           
2   7           1           
8   8           8           8
9   9           9           9
*/

// -------------------------------------------------------------------

// Caching, FrequencyMap - Loop을 통해 미리 지정된 Caching Object에 존재 여부 확인
function uniqueNumbers3(arr) {
    const uniqueElements = {}; // Caching, 임의로 저장될 곳
    const result = [];

    for (let element of arr) {
        if (!uniqueElements[element]) { // uniqueElements에 현재 element가 존재하는가?
            result.push(element);
        }

        uniqueElements[element] = element;
    }

    return result;
}

console.log(uniqueNumbers3(numbers)); // [ 1, 2, 3, 6, 7, 8, 9 ] - 중복 제거

