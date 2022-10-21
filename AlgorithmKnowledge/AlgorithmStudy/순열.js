// 순열 - 주어진 N 엘레멘트들의 모든 경우의 수를 계산하는 방법 (O(n!) 시간 복잡도)
// 백트래킹, DFS 활용해 문제 접근
// 반복(주어진 input 엘레멘트들에 반복문) -> 선택(탐색 타켓을 설정/선택을 통해 엘레멘트 순서 교체) -> 탄색(DFS를 활용해 탐색 실행) -> 선택취소(선택 과정 다시 복구, Undo)

// 예제. input: [1, 2] output: [[1, 2], [2, 1]]
// 예제. input: ["a", "b", "c"] output: ["a", "b", "c"] ["a", "c", "b"] ["b", "a", "c"] ["b", "c", "a"] ["c", "b", "a"] ["c", "a", "b"]

function permutations(array) {
    const result = []

    const dfs = (i, arr) => {
        // 배열에 값이 없거나 하나일 경우
        if (i === arr.length) {
            return result.push([...arr])
        }

        for (let j = i; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]] // 앞과 뒤 스와프
            dfs(i + 1, arr) // 재귀로 반복해 반복문이 끝날 때까지 (맨 처음의 값을 고정)
            [arr[i], arr[j]] = [arr[j], arr[i]] // 스와프한 것을 다시 되돌리는 초기화
        }
    }

    dfs(0, array)

    return result
}

const input1 = [1, 2]
const input2 = ["a", "b", "c"]

console.log(permutations(input1)) // [[1, 2], [2, 1]]
console.log(permutations(input2)) // ["a", "b", "c"] ["a", "c", "b"] ["b", "a", "c"] ["b", "c", "a"] ["c", "b", "a"] ["c", "a", "b"]