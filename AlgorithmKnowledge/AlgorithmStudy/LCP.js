// 가장 긴 공통 접두사 (LCP, Longest Common Prefix) - 여러 단어에서 같은 글자들

function longest(strArray) {
    let prefix = ""

    // strArray가 비어있을 때
    if (strArray === null || strArray.length === 0) {
        return prefix
    }

    // 첫 번째 문자열 반복
    for (let i = 0; i < strArray[0].length; i++) {
        const char = strArray[0][i] // 첫 번째 문자 한 글자씩

        // 첫 번째 문자를 제외한
        for (let j = 1; j < strArray.length; j++) {
            // 그 다음 문자열의 글자와 첫 번째 문자열의 글자가 다를 때
            if (strArray[j][i] !== char) {
                return prefix
            }
        }

        // 문자열이 있고 각 배열의 문자열의 글자가 같으면
        prefix += char
    }

    return prefix
}

const strArray = ["flower", "flow", "flight"]

console.log(longest(strArray)) // "fl"