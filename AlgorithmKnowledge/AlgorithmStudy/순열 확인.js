// 순열 확인
// 문자열 두 개가 주어졌을 때, 이 둘이 서로 순열 관계인지 확인하는 문제

// 방법 1. sort()
function checkPermutation(strA, strB) {

    if (strA.length !== strB.length) return false

    let sortedStrA = strA.split("").sort().join("")
    let sortedStrB = strB.split("").sort().join("")

    return sortedStrA === sortedStrB
}

console.log(checkPermutation("a", "aab")) // false
console.log(checkPermutation("aba", "abb")) // false
console.log(checkPermutation("hooh", "oohh")) // true
console.log(checkPermutation("aaabbbccc", "abcabcabc")) // true
console.log(checkPermutation("abaa", "abba")) // false

// 방법 2. hashMap()
function checkPermutation2(strA, strB) {

    if (strA.length !== strB.length) return false

    let counts = new Map()

    // Map의 Key 값을 단어로 설정하고 해당 키의 값이 있으면 +1씩, 없으면 1로 설정
    for (let char of strA) {
        counts.set(char, counts.has(char) ? counts.get(char) + 1 : 1)
    }

    for (let char of strB) {
        // Map의 단어가 있고 값의 개수가 0이 아니면
        if (counts.get(char) && counts.get(char) !== 0) {
            // 해당 Key의 값을 -1씩. 
            counts.set(char, counts.get(char) - 1)
        } else { // 만약 해당 키의 값이 0이면 더 이상 같은 단어가 없으므로 false
            return false
        }
    }

    // else 조건에 해당되지 않으면 true
    return true
}

console.log(checkPermutation2("a", "aab")) // false
console.log(checkPermutation2("aba", "abb")) // false
console.log(checkPermutation2("hooh", "oohh")) // true
console.log(checkPermutation2("aaabbbccc", "abcabcabc")) // true
console.log(checkPermutation2("abaa", "abba")) // false