// 모든 명함을 담을 수 있는 지갑의 최소 크기 구하기
function solution(sizes) {
    const eachSizes = [];
    const min = [];

    sizes.forEach((size) => {
        const [row, col] = size;
        min.push(Math.min(row, col));
        eachSizes.push(...size);
    })

    return Math.max(...eachSizes) * Math.max(...min);
}

/**
 * 각 명함 크기를 분리하여 나눈 값 배열에 담기
 * 각 명함에서의 가로, 세로 중 작은 값 배열에 담기
 * 작은 값 배열 중 최대 값과 명함 크기 나눈 값 배열의 최대 값을 곱하기
 * → 모든 명함을 담을 수 있는 가장 작은 지갑 크기
 */