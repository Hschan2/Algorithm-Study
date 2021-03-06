// const { queue } = require("jquery")

// 탐색 알고리즘
// 그래프의 모든 정점들을 특정한 순서에 따라 방문하는 알고리즘
// 그래프는 정점과 간선으로 구성되고 한정된 자료구조
// 각각의 지점을 정점이라고 하고 정점과 정점의 연결을 간선이라고 한다

// 예
// 문제 : 네비게이션 경로 탐색
// - 여러 개의 도시와 도시를 연결하는 도로의 목록이 주어진다
// - 한 도시가 다른 도시와 연결되어 있는지 알 수 있는가?
// - 위의 계산을 정해진 시간 내에, 효율적을 할 수 있는가?

// 데이터 예시
// - 도로 1, 2, 3, 4, 5가 존재
// - 도로 1~2, 1~3, 1~4, 4~5, 3~5가 존재한다

// 암시적 그래프 표현
// 그래프가 아니지만 그래프 탐색 알고리즘을 활용해서 풀 수 있는 문제들, 그래프로 변경하지는 않음
// 데이터의 형태에 따라 정점과 간선 대신 x, y 좌표로 각 위치를 표현한다

// 예
// 문제 : 미로에서 경로 찾기
// - N x M 크기의 배열로 표현되는 미로가 주어진다
// - 미로의 출발점과 도착점은 연결되어 있는가?
// - 위의 계산을 정해진 시간 내에, 효율적으로 할 수 있는가?

// 데이터 예시
// - 출발점 : (0, 0)
// - 도착점 : (5, 3)
// - 값이 0인 칸으로 이동 불가

// 탐색 알고리즘의 필요성
// 필요한 알고리즘은 각 정점이 서로 연결되어 있는지 주어진 시간 내에 탐색을 통해 확인하는 알고리즘

// DFS (깊이 우선 탐색)
// - 가장 직관적, 구현하기 쉬운 탐색 방법
// - 현재 정점과 연결된 정점들을 하나씩 갈 수 있는지 검사 후 특정 정점으로 갈 수 있다면 그 정점에 가서 같은 행위를 반복
// - 같은 정점을 다시 방문하지 않도록 정점에 방문했다는 것을 표시
// - 재귀 함수를 통해 구현하기

// DFS 작동 원리
//         1
// 2   5       9
// 3   6   8   10
// 4   7

// 시작점에서 한 갈래로 더 이상 갈 수 없을 때까지 탐색하고, 더 갈 곳이 없다면 이전의 경로로 되돌아간다

// DFS 구현 방법 : 그래프

// 현재 정점을 표시하는 ID 값
// @param nodeId

// void DFS_Graph(int nodeId) {
//     방문했다는 것을 먼저 표시
//     visit(nodeId);

//     linkedNode(nodeId) => 현재 정점과 연결된 다른 정점의 목록
//     for(Node node : linkedNode(nodeId)) {
//         아직 방문하지 않은 경우, 재귀적으로 탐색
//         isVisit(nodeId) => ID가 nodeId 인 정점을 방문했는지 여부를 반환
//         if(isVisit(node.getId()) != true) {
//             DFS_Graph(node.getId());
//         }
//     }
// }

// DFS의 순회 흐름 : 그래프
// 1   2       4
// 5       3
// => 5번 : 1, 2번 정점과 연결되어 있지만, 3, 4번 정점을 탐색한 뒤에 방문

// DFS 구현 방법 : 2차원 이동

// @param x
// @param y

// void DFS_Coordnate(int x, int y) {
//     방문했다는 것을 먼저 표시
//     visit(x, y);

//     위로 이동
//     isValid(x, y) => 좌표값이 x, y인 정점을 방문할 수 있는지, 좌표값이 유효한지 반환
//     if(isValid(x, y - 1)) {
//         DFS_Coordnate(x, y - 1);
//     }

//     아래로 이동
//     if(isValid(x, y + 1)) {
//         DFS_Coordnate(x, y - 1);
//     }

//     왼쪽으로 이동
//     if(isValid(x - 1, y)) {
//         DFS_Coordnate(x, y - 1);
//     }

//     오른쪽으로 이동
//     if(isValid(x + 1, y)) {
//         DFS_Coordnate(x, y - 1);
//     }
// }

// 1. 현재 위치에 방문한 것을 저장
// 2. 내가 특정 방향으로 이동할 수 있는지 검사
//     검사할 사항 : 이전에 방문한 적이 있는지 여부, 해당 위치가 좌표계 범위를 벗어나는지 여부
// 3. 이동할 수 있다면, 이동한 위치를 재귀적으로 호출

// DFS의 순회 흐름 : 2차원 이동

// 15  1           2   3
// 14  시작(0)     9   4
// 13  도착(10)    8   5
// 12  11          7   6

// 이동 순서 : 위 - 오른쪽 - 아래 - 왼쪽
// 9번 : 4방향 모두 이미 방문했기 때문에, 이동하지 못한 채 return

// DFS (깊이 우선 탐색)의 장점
// - 코드가 직관적이고 구현하기 쉽다

// DFS (깊이 우선 탐색)의 단점
// - 재귀함수를 이용하기 때문에 함수 호출 비용이 추가로 들어간다
// - 재귀 깊이가 지나치게 깊어지면 메모리 비용을 예측하기 어렵다
//     (같은 이유로, 데이터 사이즈가 일정 이상이면 DFS를 사용하지 않는 것이 좋다)
// - 최단 경로를 알 수 없다

// BFS (너비 우선 탐색)
// - 시작점에서 가까운 정점부터 순서대로 방문하는 탐색 알고리즘
// - 큐를 이용하여 구현
// - 출발점을 먼저 큐에 넣고, 다음 로직을 반복
//     큐에 저장된 정점을 하나 Dequeue
//     Dequeue된 정점과 연결된 모든 정점을 큐에 넣는다
//     큐가 비어있다면 반복 종료

// BFS의 순회 흐름 : 그래프
// 1   2       5           5  
// 3       4               4
//                         3
//                         2
//                         1

// => 1을 큐에 넣고 1과 연결된 것을 넣는다(2, 3)
//     2와 연결된 것을 넣는다 (3은 이미 들어가 있으니 4)
//     3을 넣으려고 하니 연결된 것이 이미 다 들어가 있으니 패스
//     4를 넣고 연결된 것을 넣는다 (5)
//     5를 넣으려면 연결된 것이 없으니 탐색할 것이 없으니 종료

// BFS의 작동 원리
// - 시작점 기준으로 거리가 1인 모든 지점을 탐색하고, 이후 2인 지점을 탐색...의 방법으로 모든 지점 탐색
// - 목표 지점을 찾으면 탐색을 종료하고 찾지 못했다면 연결된 모든 지점을 탐색

// BFS 구현 방법 : 그래프

// 출발한 정점의 ID 값
// @param startNodeId

// void BFS_Graph(int startNodeId) {
//     시작 지점을 먼저 넣어준다
//     queue.push(startNodeId);

//     while(queue.isNotEmpty()) {
//         위치를 하나 뽑아서 방문 처리를 해준다
//         Long nodeId = queue.pop();
        
//         ID가 nodeId인 정점을 방문한 것으로 표시
//         visit(nodeId);

//         targetId => 목적지의 ID 값
//         if(targetId.equals(node.getId())) {
//             return;
//         }

//         연결된 다른 정점들을 순회한다
//         isVisit => ID가 nodeID인 정점을 방문했는지 여부를 반환
//         for(Node node : linkedNode(nodeId)) {
//             if(isVisit(node.getId()) != true) {
//                 queue.push(node.getId());
//             }
//         }
//     }
// }

// 1. 시작점에 큐를 넣는다. 이후 큐가 빌 때까지 반복문을 돌린다
// 2. 큐의 제일 앞에 있는 정점을 뽑는다
//     A. 뽑은 지점과 연결된 정점을 큐에 추가
//     B. 뽑은 지점이 목표 정점이라면 반복문을 종료
// 3. 만약 목표 지점을 찾지 못해도 더 갈 수 있는 지점이 없으면 반복문이 종료된다

// BFS 구현 방법 : 2차원 이동

// 출발한 정점의 x 좌표 위치값
// @param start_x
// 출발한 정점의 y 좌표 위치값
// @param start_y

// void BFS_Coordnate(int start_x, int start_y) {
//     시작 지점을 먼저 넣어준다
//     queue.push(startNodeId);

//     while(queue.isNotEmpty()) {
//         위치를 하나 뽑는다
//         Position position = queue.pop();

//         방문 처리를 해주고 만약 목적지라면 로직을 종료한다
//         visit(position.x, position.y);
//         if(targetPostion.equals(position)) {
//             return;
//         }

//         위로 이동
//         if(isValid(position.x, position.y - 1)) {
//             queue.push(position.x, position.y - 1);
//         }

//         아래로 이동
//         if(isValid(position.x, position.y + 1)) {
//             queue.push(position.x, position.y + 1);
//         }

//         왼쪽으로 이동
//         if(isValid(position.x - 1, position.y)) {
//             queue.push(position.x - 1, position.y);
//         }

//         오른쪽으로 이동
//         if(isValid(position.x + 1, position.y)) {
//             queue.push(position.x + 1, position.y);
//         }
//     }
// }

// BFS의 장점
// - 효율적인 운영이 가능하고 시간 및 공간 복잡도 면에서 안정적이다
// - 간선의 비용이 모두 같을 경우, 최단 경로를 구할 수 있다
//     간선의 비용이 각각 다를 경우, 다익스트라 알고리즘 등의 최단거리 알고리즘을 활용해야 한다

// BFS의 단점
// - DFS에 비해 코드 구현이 어렵다
// - 모든 지점을 탐색할 경우를 대비해서 큐의 메모리가 미리 준비되어 있어야 한다 (만약 정점이 10만개라면 미리 할당이 된 상태로 시작해야 한다)

// 응용 : Fllod Fill Algorithm
// - 최단 경로를 찾을 필요 없이, 연결된 공간이 몇 개인지 알아야 할 때 활용된다
// - 데이터의 크기가 크지 않은 경우, 단순한 DFS 만으로도 문제를 해결할 수 있다
// - 규모가 큰 경우 BFS를 사용한다

// 예.
// 문제

// 모든 원소가 0 또는 1인 행렬이 존재. 1로 표시된 원소는 영역을 나타냄. 여기에서 상하좌우에 인접한 1은 같은 영역이라고 가정.
// 각 영역의 크기는 1의 개수로 정의. 주어진 N x N 크기의 행렬에서 영역의 개수와 각 영역의 크기를 오름차순으로 출력

// 0 1 1 0 0 0
// 0 1 1 0 1 1
// 0 0 0 0 1 1
// 0 0 0 0 1 1
// 1 1 0 0 1 0
// 1 1 1 0 0 0

// 2중 반복문을 사용해서 모든 칸을 순회 -> 칸이 1이고 방문하지 않았을 경우 DFS를 돌림 -> Count 올림

// BAEKJOON Online Judge
// 1260, 2606, 2667, 2178, 7569 문제가 해당