/*
다익스트라 알고리즘
가중치를 가진 그래프에서 특정 정점을 시작점으로 나머지 모든 점들에 대한 최단 거리 구하기

V: 정점 개수
E: 간선 개수

방법
1. 아직 방문하지 않은 장점들 중 거리가 가장 짧은 정점을 하나 선택하여 방문
2. 해당 정점에서 인접하고 아직 방문하지 않은 정점들의 거리를 갱신

자바스크립트에서는 Array.prototype.splice(startIndex, deleteCount)를 이용하여 최소 값 뽑기 가능
*/

/* 우선 순위 큐 */
/*
시작점에서부터 해당 정점까지의 거리가 제일 작은 정점의 인덱스를 dist 배열에 뽑아내기
*/
class PriorityQueue {
    constructor(dist) { // dist: 목적지
        this.queue = [];
        this.dist = dist;
    }

    enqueue(nodeIdx) { // 노드 삽입
        this.queue.push(nodeIdx);
    }

    dequeue() {
        let entry = 0;
        let entryIdx = this.queue[entry];

        this.queue.forEach((nodeIdx, idx) => {
            if(this.dist[entryIdx] > this.dist[nodeIdx]) {
                entryIdx = nodeIdx;
                entry = idx;
            }
        });

        return this.queue.splice(entry, 1);
    }
}

/* 그래프로 다익스트라 구현 */
// 그래프 배열로 생성 (기본값 null)
const graph = new Array(N).fill(null).map(() => new Array());

for(let path of road) {
    const [u, v, w] = path;

    graph[u - 1].push([v - 1, w]);
    graph[v - 1].push([u - 1, w]);
}

/* 우선 순위 큐 생성 */
const dist = new Array(N).fill(Number.MAX_SAFE_INTEGER); // 방문할 노드 초기값
const visited = new Array(N).fill(false); // 방문한 코드 초기값
const pq = new PriorityQueue(dist); // 우선순위 큐
pq.enqueue(0);
dist[0] = 0; // 초기값

/* 다익스트라 로직 */
while(pq.queue.length > 0) {
    const [curr] = pq.dequeue();
    console.log(curr);

    if(visited[curr]) continue; // 방문한 노드라면 통과

    visited[curr] = true; // 노드를 방문했다면 true

    for(const [next, w] of graph[curr]) {
        if(dist[next] > dist[curr] + w) { // 인접숫자가 더 작은 숫자의 노드로
            dist[next] = dist[curr] + w;
            pq.enqueue(next);
        }
    }
}