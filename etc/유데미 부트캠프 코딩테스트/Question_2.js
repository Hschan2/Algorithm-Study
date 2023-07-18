/**
 * 가장 많이 접근한 페이지의 횟수 출력하기
 * 주어진 레코드, 첫 번째 케이스: "1 2 3 4 B B 42 B F F"
 * 페이지 숫자가 나오면 기록
 * B가 나오면 이전 페이지로 이동, F가 나오면 다음 페이지로 이동
 * 위의 예시 레코드의 결과값은, "1 2 3 4 3 2 42 2 42"
 * 가장 많이 접근한 페이지의 횟수는 얼마인가?
 * 1 - 1, 2 - 3, 3 - 2, 4 - 1, 42 - 2
 * 결과는 2가 3회로 가장 많이 나왔기 때문에 3
 * 
 * 내가 제출한 코드의 결과값은 '1', '2', '3', '4', '3', '2', '42', '2'로 추가 값이 존재
 * 첫 번째 케이스는 최종 출력한 결과 값이 3으로 성공했지만, 추가 값이 존재하는 방문한 모든 페이지의 값이 달라서 문제 찾는 중
 * 그러나 두 번째 케이스는 추가 값 없이 정확하게 성공
 * 첫 번째 케이스가 실패한 이유를 찾는 중
 */

function solution(record) {
    const commands = record.split(' ');
    const visitedPages = [];
    let currentPage = 0;
  
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'B' && currentPage !== 0) {
            currentPage--;
            visitedPages.push(visitedPages[currentPage]);
        } else if (commands[i] === 'F' && visitedPages[currentPage + 1]) {
            currentPage++;
        } else if (!isNaN(commands[i])) {
            visitedPages.push(commands[i]);
            currentPage = visitedPages.length - 1;
        }
    }
  
    const result = {};
    visitedPages.forEach(x => {
        result[x] = (result[x] || 0) + 1
    })
  
    return Math.max(...Object.values(result));
}
  
const record = "1 2 3 4 B B 42 B F F";
const maxVisitCount = solution(record);
console.log(maxVisitCount);