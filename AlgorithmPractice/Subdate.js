/**
두 날짜(YYYYMMDD)의 차이 일수를 구하는 프로그램을 작성하시오.

※ 단, 프로그래밍 언어에서 지원하는 날짜차이를 계산하는 라이브러리는 사용하지 말것

예)

20070515 sub 20070501 = 14
20070501 sub 20070515 = 14
20070301 sub 20070515 = 75
*/

function subDate(date) {
    const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 월로 표현하기 위해 0인덱스에 0 추가
    const year = parseInt(date.slice(0, 4))
    const month = parseInt(date.slice(4, 6))
    const day = parseInt(date.slice(6))
    let days = year * 365 + day // month를 더하지 않는 이유는 각 월마다 값이 다르기 때문
    for (let i = 1; i < month; i++) {
        days += months[i]
    }

    return days
}

function solution(a, b) {
    return Math.abs(subDate(a) - subDate(b))
}


console.log(solution('20070515', '20070501')) // 14