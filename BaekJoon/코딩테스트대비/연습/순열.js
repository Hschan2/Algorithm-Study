/** 순열 (Permutations) 알고리즘 연습 */

/** 
 * 주어진 N 엘레먼트들의 모든 경우의 수를 계산하는 방법 (O(n!) 시간 복잡도)
 * 백트래킹 (Backtracking) / DFS 활용 문제 접근
 * 
 * 예제 Input: [1, 2]
 * 예제 Output: [[1, 2], [2, 1]]
 * 
 * 예제 Input: ["a", "b", "c"]
 * 예제 Output:
 * ["a", "b", "c"]
 * ["a", "c", "b"]
 * ["b", "a", "c"]
 * ["b", "c", "a"]
 * ["c", "b", "a"]
 * ["c", "a", "b"]
*/

/**
 * 순열 알고리즘 예시
 * @arr 입력받은 순환할 값들
 */
function permutations(arr) {
    /** 결과 값 담을 배열 변수 */
    const result = [];

    /** DFS 알고리즘 */
    const dfs = (i, arr) => {
        /** Index와 입력받은 값들의 길이가 같을 때 */
        if (i === arr.length) {
            return result.push([...arr]);
        }

        for (let j = i; j < arr.length; j++) {
            /** SWAP (abc -> acb) */
            [arr[i], arr[j]] = [arr[j], arr[i]];

            /** DFS, i + 1으로 범위를 재설정하기 때문에 기존 i 값은 fix되고 다음 탐색 범위에서 j */
            dfs(i + 1, arr);

            /** SWAP BACK, 동일하게 되돌리기 */
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    dfs(0, arr);

    return result;
}

console.log(permutations(["a", "b", "c"]));