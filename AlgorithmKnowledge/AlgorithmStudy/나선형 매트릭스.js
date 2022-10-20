// 나선형 매트릭스 (Spiral Matrix)
// 2D Array / 2차원 배열 순회 문제
// m x n 사이즈의 매트릭스의 엘레먼트를 나선형 모양을 순회 (m: rows, n: columns)
// 예제. input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// 예제. output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// 접근 방식
// 네 곳의 코너 포인터를 각각 변수에 저장 및 초기화
// Top Left 코너에서 시작, 첫 번째 row 왼쪽 -> 오른쪽으로 순회하고 끝나면 Top 포인터 +1
// Right Top 코너에서 시작, 맨 우측 위 -> 아래로 순회하고 끝나면 Right 포인터 -1
// Right Bottom 코너에서 시작 맨 우측 오른쪽 -> 왼쪽으로 순회하고 Bottom 포인터 -1

const test1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const test2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

function spiralMatrix(matrix) {
    const result = [];
    let left = 0; // 왼쪽값 초기화
    let right = matrix[0].length - 1; // 첫 번째 행 맨 오른쪽 값 초기화
    let top = 0; // 맨 위의 값 초기화
    let bottom = matrix.length - 1; // 맨 아래의 값 초기화

    // 왼쪽, 상단에 있을 때까지
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) { // 첫 번째 줄의 왼쪽에서 오른쪽으로
            result.push(matrix[top][i]); // [0][0], [0][1], [0][2]...
        }
        top++; // 다음 행

        for (let i = top; i <= bottom; i++) { // 오른쪽 상단에서 오른쪽 하단으로
            result.push(matrix[i][right]);
        }
        right--; // 열의 - 1

        if (top <= bottom) { // 최하단일 경우
            for (let i = right; i >= left; i--) { // 하단의 맨 오른쪽을 제외한 그 다음부터
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) { // 중간의 왼쪽에서 오른쪽으로
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

console.log(spiralMatrix(test1)); // [1, 2, 3, 6 , 9, 8, 7, 4, 5]
console.log(spiralMatrix(test2)); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]