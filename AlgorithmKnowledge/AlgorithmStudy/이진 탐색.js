// 이진 탐색(Binary Search) - 정렬된 리스트에 사용되는 탐색 알고리즘
// 리스트에서 탐색범위를 절반씩 좁혀가며 특정한 값을 찾을 때까지 반복
// 속도가 빠르고 효율적 (O(log N))

// target 값이 중간값보다 작으면 중간값을 기준으로 좌측 아이템들 탐색
// target 값이 중간값보다 크면 우측 아이템들 탐색
// 같은 방법으로 선택된 중간 값 비교
// 해당 값 발견까지 과정 반복

/**
가짜 코드

fn binarySearch(A, T) is
    Low := 0
    High := n - 1
    while Low <= High do
        middle := floor((Low + High) / 2)
        if T < a[middle] then
            High:= middle - 1
        else if T > A[middle] then
            Low:= middle + 1
        else:
            return middle
    return -1
*/

function binarySearch(arr, target) {
    let low = 0; // 가장 처음 값
    let high = arr.length - 1; // 가장 마지막

    while (low <= high) {
        let middle = Math.floor(high / 2); // 중간 값

        if (target < arr[middle]) { // 타겟이 배열의 중간 값보다 작으면
            high = middle - 1; // 가장 마지막을 중간 값 바로 전 값으로
        } else if (target > arr[middle]) { // 타겟이 배열의 중간 값보다 크면
            low = middle + 1; // 가장 작은 값을 중간 값 바로 다음으로
        } else { // target이 중간값이면
            return middle;
        }
    }

    return -1; // 어느 것도 해당이 되지 않으면
}

const input = [1, 10, 20, 47, 59, 63, 75, 88, 99];
const input2 = [1, 10, 20, 47, 59, 63, 75, 88, 99];
const target = 20;
const target2 = 30;

console.log(binarySearch(input, target)); // 2 (index 위치 값)
console.log(binarySearch(input2, target2)); // -1