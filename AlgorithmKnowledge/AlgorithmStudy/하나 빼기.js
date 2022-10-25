// 하나 빼기 - 문자열을 편집하는 방법 세 가지
// 문자 삽입, 문자 삭제, 문자 교체
// 문자열 두 개가 주어졌을 때, 문자열을 같게 만들기 위한 편집 횟수가 1회 이내인지 확인하는 함수

function oneAway(strA, strB) {
    if (strA.length === strB.length) {
        return checkEditReplace(strA, strB)
    } else if (strA.length - 1 === strB.length) { // strB가 짧은 문자일 경우
        return checkEditInsertOrDelete(strB, strA)
    } else if (strA.length + 1 === strB.length) { // strA가 짧은 문자일 경우
        return checkEditInsertOrDelete(strA, strB)
    }

    return false
}

// 교체 함수
// 1. 교체, 두 개의 문자열 길이를 비교하고 같은 길이일 경우 교체 체크
function checkEditReplace(strA, strB) {
    const edits = 0

    // 예. "aple", "apple" => 3번째의 l과 p가 다르기 때문에 뒤의 긴 글자의 인덱스를 하나 증가시킨다
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i]) {
            edits++
        }
    }

    return edits < 2
}

// strA는 짧은 문자
// strB는 긴 문자
// 2. 삽입, 두 개의 문자열 길이를 비교하고 하나의 차이일 경우 진행
// 3. 삭제, 삽입의 정반대
function checkEditInsertOrDelete(strA, strB) {
    let indexA = 0
    let indexB = 0

    while (indexA < strA.length && indexB < strB.length) {
        // 다른 글자가 발견되었을 경우
        if (strA[indexA] !== strB[indexB]) {
            // 이미 indexB가 있기 때문에 삽입 혹은 삭제가 한 번 발생해 2번 이상이 되는 경우
            if (indexA !== indexB) return false

            // 긴 문자 인덱스 +1
            // 한 번의 편집(삽입, 삭제)가 발생
            index2++
        } else {
            indexA++
            indexB++
        }
    }

    // 1회 혹은 0회 편집(삽입, 삭제) 발생했을 때
    return true
}

console.log(oneAway("apple", "aple")) // true
console.log(oneAway("aple", "apple")) // true
console.log(oneAway("more", "core")) // true
console.log(oneAway("abc", "ade")) // false