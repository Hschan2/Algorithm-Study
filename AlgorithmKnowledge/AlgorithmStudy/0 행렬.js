// 0 행렬(Zero Matrix)
// M * N 행렬의 한 원소가 0일 경우 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정
// 예. [[1, 1, 1], [1, 0, 1], [1, 1, 1]] => [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

function zeroMatrix(arr) {
    // 행과 열을 저장할 변수
    const rowSet = new Set(), colSet = new Set()

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; i++) {
            // arr[i][j]가 0이면
            // 위의 예시로 arr[1][1]이 0이기 때문에 row에 1, col에 1이 저장
            if (!arr[i][j]) {
                // 행과 열의 좌표를 저장
                rowSet.add(i)
                colSet.add(j)
            }
        }
    }

    // 위의 예시로 arr[0][1], arr[1][0], arr[1][1], arr[1][2], arr[2][1]에 0을 넣는다
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; i++) {
            // 현재 원소가 속해있는 행과 열에 존재하는가
            if (rowSet.has(i) || colSet.has(j)) {
                arr[i][j] = 0
            }
        }
    }

    return arr
}

console.log(
    zeroMatrix([[1, 1, 1], [1, 0, 1], [1, 1, 1]]), // [1, 0, 1], [1, 0, 1], [1, 0, 1]
    zeroMatrix([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]) // [0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]
)