// card1, card2에 적힌 단어들로 단어배열 goal를 만들 수 있다면 'Yes', 아니면 'No'
function solution(cards1, cards2, goal) {
    let first = 0, second = 0;

    for (let i = 0; i < goal.length; i++) {
        if (cards1[first] === goal[i]) {
            first += 1;
        }
        if (cards2[second] === goal[i]) {
            second += 1;
        }
    }

    const resultCheck = first + second === goal.length;

    return resultCheck ? "Yes" : "No";
}

/**
 * card1와 card2의 순서의 값이 goal가 같다면 각각 인덱스 값인 first, second 값 증가
 * first와 second를 더한 값이 goal의 길이와 같다면 goal과 같은 문장을 의미하기 때문에 'Yes'
 * first와 second를 더한 값이 goal의 길이와 다르다면 goal과 문장이 다르다는 이야기이기 때문에 'No
 */

// 다른 사람 풀이 - 1
function checkCards(cards, goal) {
    const cardsFilteredByGoal = goal.filter((item, index) => cards.includes(item));

    const cardFilteredByIndex = cardsFilteredByGoal.filter((item, index) => item === cards[index]);

    if (cardFilteredByIndex.length !== cardsFilteredByGoal.length) {
        return false;
    }

    return true;
}

function solution(cards1, cards2, goal) {
    if (checkCards(cards1, goal) && checkCards(cards2, goal)) {
        return "Yes";
    }

    return "No";
}

/**
 * 다른 사람 풀이 - 1
 * card1 또는 card2가 goal에 있는지 판단여부 뒤 해당 단어들로만 재구성
 * 해당 단어들로만 구성한 배열의 순서 값들이 card1 또는 card2의 순서 값과 같은지 재구성
 * 만약, 두 개의 필터 값들이 같으면 같은 문장이고, 다르면 다른 문장
 * 
 * filter로 각 card에 해당되는 배열로 변경 후에 다시 filter로 각 순서가 맞는지 판별하는 것이 새로움
 * filter를 이런 방식으로 사용할 지 상상도 못해서 새로운 배움을 얻음
 */

// 다른 사람 풀이 - 2
function solution(cards1, cards2, goal) {

    for (const s of goal) {

        if (cards1[0] == s) {
            cards1.shift();
        } else if (cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
}

/**
 * 다른 사람 풀이 - 2
 * goal에 있는 문자열을 하나씩 판별해서 같은 문장인지 아닌지 판별
 * card1에 해당하는 문자라면 card1에서 제거, card2에 해당하는 문자라면 card2에서 제거
 * 어느 쪽에도 해당하지 않으면 없는 단어 또는 순서가 다른 단어이며 모두 해당하면 순서까지 만족하는 문장
 * 
 * 제일 간단하고, 신선한 해결 방법임을 느낌
 * 단어를 shift()로 제외시켜서 모든 단어가 제외될 경우를 판별하는 것이 신선한 아이디어
 */