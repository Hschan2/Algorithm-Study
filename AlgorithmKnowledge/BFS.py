# /**
#  * https://www.youtube.com/watch?v=7ypVjnqyaEU
#  * 
#  * BFS(Breath First Search) - 넓이 우선 탐색
#  * 노드의 깊이가 낮은 것부터 탐색 -> 시작 노드로 부터 인접한 노드를 모두 방문한 후, 이어지는 모든 노드를 탐색
#  * 최단 경로를 찾을 때 많이 사용 -> 토렌트 같은 P2P2 환경에서 가까운 Peer를 찾을 때, 네비게이션의 최단 경로 문제를 탐색할 때
#  * 
#  * 그래프의 깊이가 깊을 때, 모든 경로를 추적할 때 => DFS - 재귀, 스택
#  * 최단경로, 그래프가 얕을 때 => BFS - 큐
#  * 
#  * 실습
#  * Queue: BFS 로직에 이용되는 자료구조
#  * Route: BFS의 최종 경로를 담는 자료구조
#  * Visited: 방문한 노드 추적
#  * Vertex: 작업중인 임시 노드 보관
#  */

# /**
#  * 과정
#  * 큐에 내용이 있는가? => 큐에서 Pop => Route 추가 => 인접한 노드 중 처음 보는 친구가 있는가? => Visited에 담기 => 큐에 담기
#  */

def bfs(graph, start):
    visited = set()
    route = []
    queue = []
    
    queue.append(start)
    visited.add(start)
    
    while queue:
        vertex = queue.pop(0)
        route.append(vertex)
        
        for neighbour in graph[vertex]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)
        print(queue)
                
    return route
    
graph = {
    0: [1, 2, 4],
    1: [0, 3],
    2: [0],
    3: [1, 5],
    4: [0],
    5: [3]
}

bfs(graph, 0)