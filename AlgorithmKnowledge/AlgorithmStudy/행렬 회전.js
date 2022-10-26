// 행렬 회전(이미지 회전)
// 이미지를 표현하는 N * N 행렬에서 이미지의 각 픽셀은 4바이트이며 이미지를 90도 회전시키는 메소드 작성
// 부가적인 행렬을 사용하지 않을 것

/**
 * Transpose(전치행렬)
 * 왼쪽 위 -> 오른쪽 아래까지의 대각선을 중심으로 원소들의 위치를 서로 뒤바꿈
 * 2중 반복문 사용. i = 행, j = 열. j < i일때 j++. swap하기 (예. m[j][i] <-> m[i], [j])
 */

function rotateMatrix(arr) {
    // 1. Transpose, 왼쪽 위 -> 오른쪽 아래까지의 대각선을 중심으로 원소들의 위치를 서로 뒤바꿈
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }

    // 2. Reverse (양 옆 값 바꾸기)
    for (let row of arr) {
        const size = row.length

        for (let i = 0; i < size / 2; i++) {
            let temp = row[i]
            row[i] = row[size - 1 - i]
            row[size - 1 - i] = temp
        }
    }

    return arr
}

console.log(
    rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
    rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]),
)

/**
[1, 2, 3]    [7, 4, 1]
[4, 5, 6] => [8, 5, 2]
[7, 8, 9]    [9, 6, 3]

[1, 2, 3, 4]        [13, 9, 5, 1]
[5, 6, 7, 8]    =>  [14, 10, 6, 2]
[9, 10, 11, 12]     [15, 11, 7, 3]
[13, 14, 15, 16]    [16, 12, 8, 4]
*/
