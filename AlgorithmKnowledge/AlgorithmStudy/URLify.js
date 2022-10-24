// URL화 (URLify)
// 주어진 문자열 내 모든 공백을 '%20'으로 바꾸는 메소드 작성.
// 문자열 끝에 추가로 핑료한 문자들을 더 할 수 있는 충분한 공간이 있다고 가정.
// 공백을 포함하는 무낮열의 길이도 함께 주어진다고 가정

// 예. input: "Mr John Smith   ", 13 | output: Mr%20John%20Smith

// 1. trim() 방법
function urlify(str, num) {
    // str의 양 옆 빈칸을 제거하고 한 단어마다 배열로 나누기
    let toArray = str.trim().split("")

    for (let i in toArray) {
        if (toArray[i] === '') {
            toArray[i] = '%20'
        }
    }

    return toArray.join("")
}

console.log(
    urlify("Mr John Smith   ", 13) === "Mr%20John%20Smith", // true
    urlify(" Mr John Smith   ", 13) === "Mr%20John%20Smith", // true
    urlify("  Coding Moon ", 11) === "Coding%20Moon" // true
)

// 2. pointer 방법
function urlify2(str, num) {
    let output = "" // result
    let whitespace = str.length - num // 실제 공백 갯수
    let actualStartIndex = 0 // 앞에 공백이 없는 첫 번째 글자 인덱스 위치

    let flag = false
    for (let i = 0; i < str.length; i++) {
        // 만약 빈 칸이고 flag가 false 일 때, 실제 인덱스 찾는 값 +1
        if (str[i] === ' ' && !flag) {
            actualStartIndex++;
        } else { // 아니면 flag를 true로. 즉, 빈 칸이 아니라 단어가 있는 경우
            flag = true
        }
    }

    // 실제 단어가 있는 인덱스의 값 actualStartIndex부터 시작해서 (실제 값 인덱스 - 실제 공백 개수)를 str 길이에서 뺀 길이만큼 반복
    // 예. Mr John Smith (actualStartIndex: 0, str.length: 16, whitespace: 3)
    // 예.  Mr John Smith   (actualStartIndex: 1, str.length: 17, whitespace: 4)
    for (let i = actualStartIndex; i < str.length - (whitespace - actualStartIndex); i++) {
        // 만약 문자열 중간에 공백이 있으면 %20 아니면 단어 그대로
        output += str[i] === ' ' ? '%20' : str[i]
    }

    return output
}

console.log(
    urlify2("Mr John Smith   ", 13) === "Mr%20John%20Smith", // true
    urlify2(" Mr John Smith   ", 13) === "Mr%20John%20Smith", // true
    urlify2("  Coding Moon ", 11) === "Coding%20Moon" // true
)