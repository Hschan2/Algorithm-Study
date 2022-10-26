// 문자열 회전(String Rotation)
// 한 단어가 다른 단어에 포함된 문자열인지 판별 (isSubstring())
// strA와 strB의 두 문자열이 주어질 때, strB가 strA를 회전시킨 결과인지 판별하는 코드를 isSubstring()을 한 번만 호출해 작성

function stringRotation(strA, strB) {
    // 두 문자열의 길이가 다르면 애초에 다른 글자
    if (strA.length !== strB.length) return false

    // return isSubstring(strA, strB)
    return isSubstring2(strA, strB)
}

// 방법 1
// strA의 각 글자 순회, 매회 맨 앞 글자를 우측으로 보내 새로운 문자로 변환
// 변환된 문자열이 strB와 같은지 확인
function isSubstring(strA, strB) {
    let i = 0

    // strA와 strB의 문자열 길이가 같다는 가정하에
    while (i < strA.length) {
        // slice로 strA의 두 번째 값부터 시작하도록 하고 맨 첫번째 문자를 맨 뒤에 붙여넣기
        strA = strA.slice(1).concat(strA[0])

        if (strA === strB) return true

        i++
    }

    return false
}

// 방법 2
// 예. abcde, deabc일 경우, abc(x)de(y). strA = xy, strB = yx일 때 strA를 yx0로 바꿀 수 있는 방법은 xyxy에서 가운데 yx를 가져오는 것
function isSubstring2(strA, strB) {
    // strA를 두 개 붙여서 xyxy로 만들고 strB의 yx가 존재하는지 indexOf로 확인
    // indexOf()는 -1보다 클 경우, 존재하는 것
    return strA.concat(strA).indexOf(strB) > -1
}

console.log(
    stringRotation("waterbottle", "erbottlewat"), // true
    stringRotation("abcde", "cdeab"), // true
    stringRotation("abcde", "abced"), // false, ed가 회전으로 de가 될 수 없으니까(위치 바꾸기가 아님)
    stringRotation("moon", "moon"), // true
)