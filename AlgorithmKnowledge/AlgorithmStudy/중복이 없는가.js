// 중복이 없는가
function isUnique(str) {

    // 1번 방법 for
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; i < str.length; j++) {
            // 이전 글자와 다음 글자 비교. 같으면 false 반환
            if (str[i] === str[j]) return false
        }
    }

    // 조건에 아무것도 해당되지 않으면 true 반환
    return true

    // 2번 방법 map
    let map = new Map()

    for (let char of str) {
        if (map.has(char)) return false

        // 한 글자씩 key로 저장
        map.set(char, true)
    }

    return true
}

console.log(isUnique("")) // true
console.log(isUnique("abcd")) // true
console.log(isUnique("abccd")) // false
console.log(isUnique("bhjjb")) // false
console.log(isUnique("mdjq")) // true
console.log(isUnique("geez")) // false