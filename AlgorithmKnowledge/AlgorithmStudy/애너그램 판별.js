// 애너그램 판별 (Valid Anagram) - 두 단어의 글자 나열 순서는 다르지만 구성이 일치할 시
// 예. LISTEN <-> SILENT

const stringA = "listen";
const stringB = "silent";

// 방법 1 - Split() -> Sort() -> Join()
function isAnagram(strA, strB) {
    if (strA.length !== strB.length) {
        return false;
    }

    // 한 글자 씩 분리하고 순서대로 나열하고 다시 합친 것을 비교
    return strA.split("").sort().join() === strB.split("").sort().join();
}

isAnagram(stringA, stringB); // true

// -------------------------------------------------------------------

// 방법 2 - hashMap
function isAnagram2(strA, strB) {
    if (strA.length !== strB.length) {
        return false;
    }

    const hashMap = {};
    for (const char of strA) {
        // { l:1, i:1, s:1, t:1, e:1, n:1 }
        hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
    }

    for (const char of strB) {
        if (!hashMap[char]) { // hashMap에 strB의 글자가 들어가 있지 않으면 혹은 없거나
            return false;
        }

        hashMap[char]--; // 만약 글자가 있으면 하나씩 줄어들어 다음 글자로
    }

    return true;
}

isAnagram2(stringA, stringB); // true