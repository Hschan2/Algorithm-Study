// 구간 병합하기
function merge(intervals) {
    const len = intervals.length;

    // 없거나 하나만 있을 경우, 처리
    if (len === 0) return []
    else if (len === 1) return intervals

    // 구간 시작시간 기준으로 정렬 (sort())
    intervals.sort((a, b) => a[0] - b[0])

    // 결과값 초기화 (첫 배열 값)
    let result = [intervals[0]];

    for (let interval in intervals) {
        let previous = result[result.length - 1]

        // 조건
        // 1. 이진 구간의 끝 시간 -> 그 다음 구간의 시작 시간 -> 병합
        // 예. [[1, 3], [2, 6], [8, 10], [15, 18]]의 1, 2, 8, 15가 interval[0]
        if (previous[1] >= interval[0]) {
            previous[1] = Math.max(previous[1], interval[1])
        } else { // 2. 아닐 경우 병합을 하지 않고 결과리스트에 추가
            result.push(interval);
        }
    }

    return result
}

const input1 = [[1, 3], [2, 6], [8, 10], [15, 18]]
const input2 = [[1, 4], [4, 5]]

console.log(merge(input1)) // [[1, 6], [8, 10], [15, 18]]
console.log(merge(input2)) // [[1, 5]]