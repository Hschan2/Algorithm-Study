/**
간략 문제 설명

아파트 호수와 비밀번호가 주어진다.
[[101, 1234], [102, 54321], [201, 202], [202, 1]]

주어지는 전체 호수와 비밀번호는 다음과 같다.
"101#1234#102#654321#51#203#201#202#1"

호수와 비밀번호는 #을 기준으로 다음과 같이 확인된다.
호수#비밀번호#
여기서 "#"는 확인과 같은 기능을 한다.
호수(확인)비밀번호(확인)

여기서 호수와 비밀번호가 옳바른 경우의 값을 찾아라.

위의 예시 기준으로
101 | 1234      → 통과
102 | 654321    → 비밀번호 틀림
51  |           → 51호는 없음
203 |           → 203호는 없음
201 | 202       → 통과
1   |           → 1호는 없음

정답: 2 (101#1234#, 201#202#)

*/

// 내 풀이
function solution(data, passwords) {
    let count = 0;
    const checkRoomPassword = [];
    const splitPasswords = passwords.split("#").filter((value) => value !== "").map((value) => Number(value));

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < splitPasswords.length; j++) {
            if (data[i][0] === splitPasswords[j] && data[i][0] === splitPasswords[j + 1]) {
                count += 1;
                checkRoomPassword.push(splitPasswords[j], splitPasswords[j + 1]);
            }
        }
    }

    for (let i = 0; i < checkRoomPassword.length; i++) {
        if (checkRoomPassword[i] === checkRoomPassword[i + 1]) {
            count -= 1;
        }
    }

    return count;
}

// 풀이 수정
function solution(data, passwords) {
    const bArray = passwords.split("#");
    let count = 0;

    for (let i = 0; i < bArray.length; i += 2) {
        const roomNumber = parseInt(bArray[i]);
        const password = parseInt(bArray[i + 1]);

        const matchingRoom = data.find(([room, pass]) => room === roomNumber);

        if (matchingRoom) {
            if (matchingRoom[1] === password) {
                count += 1;
            }
        }
    }

    return count;
}