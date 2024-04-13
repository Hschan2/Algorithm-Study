// 음식의 양을 칼로리가 적은 순서대로 나타내기, 배열 첫 번째 인덱스 0을 기준으로 왼쪽 선수, 오른쪽 선수의 칼로리 계산
function solution(food) {
    const left = [];
    const right = [];

    for (let i = 0; i < food.length; i++) {
        const half = Math.floor(food[i] / 2);

        for (let j = 0; j < half; j++) {
            left.push(i);
            right.push(i);
        }
    }

    return left.join('') + '0' + right.reverse().join('');
}

/**
 * 위의 첫 번째 코드는 비효율적인 면이 보임
 * 굳이, left과 right 배열 둘 다 선언한 것이 문제라고 생각
 * 그리고, 중첩 for 문을 사용한 것에 개선 필요성 느낌
 * 다른 방법은 없을까?
 */

function solution(food) {
    const list = [];

    food.forEach((num, index) => {
        if (num > 1) {
            list.push(String(index).repeat(Math.floor(num / 2)))
        }
    })

    return list.join('') + '0' + list.reverse().join('');
}

/**
 * 위의 두 번째 코드에서 배열은 하나만 선언하고, repeat()을 사용해 값 넣기
 * 위의 방법이 지금에서 가장 최선
 * 그러나, 다르게 표현할 수 있을까? 고민
 */

function solution(food) {
    let list = ''

    food.forEach((num, index) => {
        if (num > 1) {
            list += String(index).repeat(Math.floor(num / 2));
        }
    })

    return list + '0' + [...list].reverse().join('');
}

/**
 * 위의 세 번째 코드는 배열 저장에서 문자열 저장으로 변경하여 처리
 * 큰 변화는 없지만, join을 한 번만 사용하는 차이
 */