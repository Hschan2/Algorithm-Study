// 최대 수익 계산 - N 기간 동안 주식가격 변화를 기준으로 낼 수 있는 가장 큰 수익 계산

// 문제 - 주어진 기간동안 주식 매매를 하며 얻은 이익을 계산
// 예. 기간 중 가장 저렴할 때 주식 구입, 가장 비쌀 때 주식 판매
// 예. 3일 동안 주식 가격이 [100, 50, 250] 이면, 최대 이익은 200
// 예. 3일 동안 주식 가격이 [100, 50, 50] 이면, 최대 이익은 0

// 매 회 반복마다 조건문으로 현재까지 가장 저렴한 구입 가격과 현재의 가격 비교
// 현재의 가격이 minBuyPrice보다 클 때, 수익 발생하고 maxProfit 변수값 변경
// 현재의 가격이 minBuyPrice보다 작을 때, 수익 발생하지 않고 minBuyPrice 변수값 변경

function maxProfit(prices) {
    let maxProfit = 0; // 최대 가격
    let minBuyPrice = prices[0]; // 가장 저렴한 구입 가격

    for (let price of prices) {
        if (minBuyPrice < price) {
            maxProfit = Math.max(maxProfit, price - minBuyPrice);
        } else {
            minBuyPrice = price;
        }
    }

    return maxProfit;
}

const input1 = [100, 200, 50, 30, 150, 250];
const input2 = [10, 20, 50, 100, 80, 250];
const input3 = [150, 80, 60, 50, 30];

console.log(maxProfit(input1)); // 220, 30에 사서 250에 팔기 때문
console.log(maxProfit(input2)); // 240, 10에 사서 250에 팔기 때문
console.log(maxProfit(input3)); // 0, 가장 저렴한 값이 마지막에 있기 때문