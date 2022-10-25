// 문자열 압축, 반복되는 문자의 개수를 세는 방식의 기본적인 문자열 압축 메소드 작성
// aabcccccaaa를 압축하면 a2b1c5a3이 되며, 만약 압축된 문자열의 길이가 기존 문자열 길이보다 길면 기존 문자열 반환
// 문자열은 대소문자 알파벳 (a-Z)로만 구성

function startingCompression(str) {
    let output = []
    let count = 1 // 최소한의 글자가 1개 있기 때문에

    for (let i = 0; i < str.length; i++) {
        let current = str[i] // 현재 글자
        let next = str[i + 1] // 다음 글자

        if (current === next) { // 현재 글자와 다음 글자가 같으면 count 증가
            count++
        } else { // 다르면
            output.push(current + count) // 현재 글자에다가 count된 숫자 더하기
            count = 1
        }
    }

    // 나누어진 배열을 한 문장으로 합치기
    output = output.join("")

    // 만약 압축된 문자의 길이가 기존 문자의 길이보다 작으면 압축된 문자를 아니면 기존 문자를 반환
    return output.length < str.length ? output : str
}

console.log(
    startingCompression("aabcccccaaa"), // a2b1c5a3
    startingCompression("aa"), // a2
    startingCompression("aaaAAaa"), // a3A2a2
    startingCompression("aacbba"), // aacbba (a2c1b2a1이 더 길기 때문에)
)