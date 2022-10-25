// 회문 순열: 주어진 문자열이 회문의 순열인지 아닌지 확인하는 함수
// 회문: 앞으로 읽어도 뒤로 읽어도 같은 단어 혹은 구질을 의미
// 순열: 문자열을 재배치
// 회문이 꼭 사전에 등장하는 단어로 제한될 필요 없음 (대소문자와 빈글자는 무시한다는 가정)

// 1. 글자구성 갯수가 홀수 - 한가지 고유 글자 + 짝으로 구성된 글자들
// 2. 글자구성 갯수가 짝수 - 모든 글자 짝으로 구성
function checkPalinPerm(str) {
    // 1. hashMap()
    let map = new Map()
    // 2. 글자 갯수 확인
    let charCount = 0
    str = str.toLowerCase()

    for (let char of str) {
        // 띄어쓰기일 경우 무시하고 넘어가기
        if (char === ' ') continue

        // 3. 인풋문자열 분해 -> hashMap 사용, 출연빈도 추적, 짝수 글자일 경우 hashMap에서 삭제
        if (map.get(char)) map.delete(char)
        else map.set(char, true)

        // 2. 글자 갯수 확인
        // 빈 문자를 제외한 글자의 개수
        charCount++
    }

    // 4. 글자 갯수 홀수 혹은 짝수 -> key의 갯수에 따라 true/false
    if (charCount % 2 === 0) return map.size === 0
    else return map.size === 1

}

console.log(
    checkPalinPerm("Tack Coa"), // true
    checkPalinPerm("Tack Boa"), // true
    checkPalinPerm("aabbc"), // true
    checkPalinPerm("aabc") // true
)