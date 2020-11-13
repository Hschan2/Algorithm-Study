// 그리디 알고리즘 (Greedy) == 탐욕 알고리즘
// 미래를 생각하지 않고 각 단게에서 가장 최선의 선택을 하는 알고리즘 기법

// 사용하기 어울리는 문제 유형
// 1번
// 활동 선택 문제
// 예시로 한 강의실에서 여러 개의 수업을 하려고 할 때 한 번에 가장 많은 수업을 할 수 있는 경우를 고르는 문제

// 강의를 최대한 많이 들을 수 있는 갯수는 몇 개가 되는가?
// 시간이 겹치면 안되기 때문에 결과로 {A1, A3, A6, A8}이 최적이다.
// 1~3 - 4~7 - 8~10 - 11~14
// [순번, 강의 시작 시간, 강의 종료 시간]
let activity = [[1,1,3], [2,2,5], [3,4,7], [4,1,8], [5,5,9], [6,8,10], [7,9,11], [8,11,14], [9,13,16]];

function activitySelection(act) {
    let result = [];
    // 1. 끝나는 시간 순으로 정렬
    let sorted = act.sort((prev, cur) => {
        return prev[2] - cur[2]; // 끝나는 시간 순으로 정렬한다
    });
    
    let last = 0;
    // 2. 반복문을 돌면서 집합이 끝나는 시간이 다음 행동의 시간보다 작으면 집합에 추가
    sorted.forEach((item) => {
        if(last < item[1]) { // 조건 만족 시 결과 집합에 추가
            last = item[2];
            result.push(item);
        }
    });

    return result.map(result => { // 몇 번째 강의가 담아져 있는지 확인하기 위해 map을 사용해 배열에 담는다.
        return result[0];
    });
}

console.log(activitySelection(activity)); // [1, 3, 6, 8]

// 2번
// 분할 가능 배낭 문제 (무게에 따라 배낭에 넣을 수 있는 물건, 없는 물건 파악)

// 무게가 무거울 경우 쪼개서 넣을 수 있는 조건 추가 (무게가 초과할 것 같을 때 쪼개서 일부만 추가)
// 무게 대비 가치가 높은 것을 먼저 넣는 것이 최선
// 무게 제한은 50

let boxes = [[1,60,10], [2,100,20], [3,120,30]];

function fractionalKnapsack(item, weight) {
    let sorted = item.sort((prev, cur) => {
        return cur[1] / cur[2] - prev[1] / prev[2]; // 무게를 쪼갰을 때의 가치 순으로
    });
    
    let limit = weight; // 무게 제한
    let result = 0;

    for(let i = 0; i < sorted.length; i++) {
        let cur =  sorted[i];
        if(limit > 0) { // 무게 제한이 남아있을 경우
            if(limit >= cur[2]) { // 넣을 무게가 무게 제한보다 이하일 때
                limit -= cur[2]; // 넣은 만큼 무게 제한에서 뺌
                result += cur[1];
            } else {
                result += cur[1] / cur[2] * limit; // 넣을 물건을 일부 잘라서 넣는다
                limit = 0; // 제한 무게가 꽉 찼으니 0
            }
        } else { // 무게 제한이 모두 초과했을 때
            break;
        }
    }

    return result;
}

console.log(fractionalKnapsack(boxes, 50));

// 3번
// 거스름돈 주기
// 예를 들어서 1420원을 500원, 100원, 50원, 10원으로 거슬러준다
// 가장 적은 갯수로 거슬러 줄 수 있는 방법은 무엇인가?

// 가장 큰 동전부터 거슬러주면 된다
// 500원으로 거슬러줄 수 있을 때까지 거슬러주고 
// 그 다음 100원 그 다음 50원 그 다음 50원으로 거슬러주는 방법으로 그리드 방식을 사용한다
let totalCost = 1450;
let count = 0;
let coins = [500, 100, 50, 10];

for(let i = 0; 0 < totalCost; i++) {
    count += Math.floor(totalCost / coins[i]); /// 소수점 버리기
    totalCost %= coins[i];
}

console.log(count);


// 언제 사용하나?
// 탐욕 선택 속성과 최적 부분 구조 때 사용
// 한 번의 선택이 다음 선택에는 전혀 무관한 값이여야 하며 매 순간의 최적해가 문제에 대한 최적해여야 한다

// 거스름돈을 제외한 예를 들어서
// 서울에서 대구까지 경로가 [200, 250, 300]이 있으며 대구에서 부산까지 경로가 [80, 100, 120]이 있을 때
// 서울에서 부산까지 최단 경로를 구할 때, 서울에서 대구까지 경로 중 200을 선택하고 대구에서 부산까지 경로 중 80을 선택하여 280이라는 최단 합을 가져온다.