// 팰린드롬, 회문 (Palindrome): 앞으로 혹은 뒤로 읽었을 때 같은 문자열
// 예. level, eye, hannah

// 문제: 입력받은 문자열이 팰린드롬인지 판별하는 알고리즘 구현하기
// 예제. level -> true, david -> false, eye -> true

// 방법 1 - 추가 문자열 활용
function checkPalindrome(str) {
    let reversed = "";
    for (let i = str.length; i >= 0; i--) { // str의 글자를 반대로 하나씩 확인
        reversed += str[i];
    }

    return reversed === str;
}

console.log(checkPalindrome("abba")); // true
console.log(checkPalindrome("david")); // false
console.log(checkPalindrome("eye")); // true
console.log(checkPalindrome("level")); // true

// 방법 2 - Two Pointer(투포인터) 활용
function checkPalindrome2(str) {
    const len = str.length; // 문자열 길이
    const middle = Math.floor(len / 2); // 문자열 중간

    for (let i = 0; i < middle; i++) { // 문자열 중간까지 반복
        if (str.charAt(i) !== str.charAt(len - 1 - i)) { // 문자열 앞과 뒤를 비교 (예. 첫 번째와 마지막, 두 번째와 마지막에서 두 번째)
            return false;
        }
    }

    return true;
}

console.log(checkPalindrome2("abba")); // true
console.log(checkPalindrome2("david")); // false
console.log(checkPalindrome2("eye")); // true
console.log(checkPalindrome2("level")); // true