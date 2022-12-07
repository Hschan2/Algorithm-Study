/**
 * 투 포인터 기법
 * 1차원 배열에서 각자 다른 원소를 가리키는 2개의 포인터를 사용해 목표값 구하기
 * 완전탐색 O(n2) 솔루션 => O(n)으로 성능 향상 가능
 * 연속된 구간의 원소들을 처리고 싶거나 정렬된 배열에서 특정 값을 구할 때 투 포인터 시도
 * 강의 - https://www.youtube.com/watch?v=SrMk-EdWRUE
 */

// 합이 9인 연속 부분 배열의 개수 구하기
// 완전 탐색 O(n2) 코드 방식, 느린 속도
function countSubArrSumOfX(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > x) break;
            else if (sum == x) {
                count++;
                break;
            }
        }
    }

    return count;
}
countSubArrSumOfX([1, 3, 6, 5, 2, 7, 9], 9);

// 투 포인터 코드 방식, 빠른 속도
function countSubArrSumOfX(arr, x) {
    let count = 0;
    let sum = 0;
    let left = 0;
    let right = 0;
    while (right <= arr.length) {
        if (sum === x) {
            count++;
            sum -= arr[left];
            left++;
        } else if (sum < x) {
            sum += arr[right];
            right++;
        } else if (sum > x) {
            sum -= arr[left];
            left++;
        }
    }

    return count;
}
countSubArrSumOfX([1, 3, 6, 5, 2, 7, 9], 9);

// 정렬된 배열에서 두 개의 원소의 합이 x와 같은지 확인하고 맞으면 각각 원소의 인덱스 반환
// 완전 탐색 코드 방식, 느린 속도, 비효율적
function twoSumSorted(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x && i != j) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}
countSubArrSumOfX([2, 4, 5, 7, 11, 15], 15);

// 투 포인트 코드 방식, 빠른 속도, 효율적
// 정렬이 되어 있다는 가정이 있었기 때문에 왼쪽 끝, 오른쪽 끝에서 시작하는 것이 가능
function twoSumSorted(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) { // 왼쪽 포인터가 오른쪽 포인터를 만나면 종료
        let sum = arr[left] + arr[right];
        if (sum === x) {
            return [left, right];
        } else if (sum < x) {
            left++;
        } else if (sum < x) {
            right--;
        }
    }

    return [-1, -1];
}
countSubArrSumOfX([2, 4, 5, 7, 11, 15], 15);