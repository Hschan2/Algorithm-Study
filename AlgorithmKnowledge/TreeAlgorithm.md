## 트리 알고리즘
선형 구조가 아닌 계층적인 구조를 표현할 때 사용할 수 있다   
트리는 기본적으로 부모-자식 관계이며 이를 각각 노드라고 부른다. 노드는 다른 노드와 차별점을 두는 데이터와 자식들과의 관계를 담고 있는 정보로 나누어진다.   
```기본적으로 트리의 크기가 N일 경우, 전체 간선의 개수는 N - 1개```

### 컴퓨터 메모리 구조에서 트리 작동
부모는 자식 노드의 ```주소```를 가지고 있다. 메모리에서 같은 노드 안에 부모와 자식 노드의 데이터가 같이 저장되는 것이 아니다. 즉, 부모 노드는 자식 노드들이 저장되어 있는 메모리 주소만 알고 있으면 연결이 되며, 언제든지 부모에서 자식으로 접근이 가능하다.

### 이진 탐색 트리 (Binary Search Tree)
이진 탐색이 동작할 수 있도록 고안된 효율적인 탐색이 가능한 자료구조   

* 이진 탐색 트리 특징
    * 왼쪽 자식 노드 < 부모 노드 < 오른쪽 자식 노드
    * 부모 노드보다 왼쪽 자식 노드가 작다
    * 부모 노드보다 오른쪽 자식 노드가 크다   

### 트리의 순회 (Tree Traversal)
트리 구조에 포함된 노드를 특정한 방법으로 한 번씩 방문하는 방법이다.   
(트리의 정보를 시각적으로 확인 가능)   

* 대표적인 트리 순회 방법
    * 전위 순회(Pre-order Traverse) : 루트를 먼저 방문
    * 중위 순회(in-order Traverse) : 왼쪽 자식을 먼저 방문한 뒤에 루트 방문
    * 후위 순회(post-order Traverse) : 오른쪽 자식을 먼저 방문한 뒤에 루트 방문   

### 트리 알고리즘 구현
트리 알고리즘을 구현하기 위해서 <b>배열</b>을 이용한다. 배열에 자식 노드들의 <b>주소</b>를 담는다. 자식 노드를 생성하고 배열에 담으면 자바스크립트는 자동으로 주소를 <b>매핑</b>한다.   

자식 노드를 삭제하기 위해서는 배열에서 해당하는 원소만 제거하면 해당 자식 노드의 정보(주소)가 삭제된다.   

```
class Node {
    constructor(data) {
        this.data = data; // 다른 노드와 차별점을 두는 데이터
        this.children = []; // 자식들과의 정보(주소)를 담을 배열
    }

    add(data) { // 자식 추가하는 메소드
        this.children.push(new Node(data)); // 자식 노드를 생성하고 바로 배열에 저장 (주소를 저장하는 행위)
    }

    remove(data) { // 자식의 정보를 지우는 메소드
        this.children = this.children.filter(child => child.data === data ? false : true); // filter 를 거쳐서 해당하는 자식의 정보를 배열에서 삭제
    }
}

class Tree() {
    constructor() {
        this.root = null;
    }
}

const t = new Tree(); // 빈 트리를 생성
t.root = new Node('a'); // 루트가 node 'a'의 주소를 가리키면 'a' 의 자식들까지 접근 가능
t.root.add('b'); // a의 자식 'b', 'c'
t.root.add('c');
t.root.children[0].add('d'); // 'b' 의 자식으로 'd'가 추가된다.
```

위 코드를 살펴보자. 우선 빈 트리를 생성한다. 그리고 루트를 'a'의 주소로 가리키도록 만든다. (여기서 'a'의 자식들까지 접근이 가능하다.) 그리고 루트의 자식으로 'b', 'c'를 추가한다. 마지막으로 루트의 첫 번째 자식인 'b'의 자식으로 'd'를 추가한다.

### BFS(Breadth First Search) 탐색
BFS, 너비우선탐색은 부모-자식 관계를 통해 트리의 계층이 생기는 트리를 탐색(순회)하는 방법 중 하나이다. (너비 = 층)   

너비우선탐색을 쉽게 이해하기 위해서 사내 조직도를 보면 된다. 사장-부장-대리-사원 순서대로 나열하고 탐색하면 된다.   

#### BFS 구현하기
층을 구분할 때, First In First Out 구조를 가진 큐를 이용하면 된다. 계층이 우선 순위이며 층마다 우선 순위를 가지면 된다. 큐의 이름을 방문하지 않는 노드들이 담겨있는 큐, unvisitedQueue라고 설정한다. 그리고 이 큐에 노드가 담겨져 있으면 아직 방문하지 않은 노드들이 잇는 것이다. 모든 노드를 방문하기 위해 while 문의 조건문에 큐의 길이를 매번 확인하면 된다.   

노드를 빼면서 그에 해당하는 자식들은 아직 방문하지 않았기 때문에 큐에 추가하면 된다. ```unvisitedQueue.push(...current.children)```   

자동으로 큐에 자식들의 주소가 쌓이고 같은 너비의 노드들 뒤에 자식들의 주소가 붙어 항상 해당하는 층의 노드를 모두 방문해야 그 아래층인 자식층으로 내려갈 수 있다.

```
class Tree{
    constructor() {
        this.root = null;
    }

    BFS(fn) {
        if(this.root === null) return;

        const unvisitedQueue = [this.root];
        while(unvisitedQueue.length !== 0){
            const current = unvisitedQueue.shift(); // dequeue
            unvisitedQueue.push(...current.children);
            fn(current);
        }
    }
}
```

위 코드에서 우선 unvisitedQueue에 루트 값을 저장한다. 그리고 반복문으로 큐를 방문하여 확인한다. 그리고 현재 부모 노드의 자식들을 모두 큐에 담는 과정을 거치고 나서 현재 노드를 가지고 콜백 함수를 실행한다.   

BFS(fn)은 인자로 콜백 함수로 받는다.   

### DFS(Depth First Search) 탐색
깊이우선탐색은 깊이. 즉, 자식들이 우선 순위가 된다. 부모로부터 자식까지 아래로 쭉 훑고, 그 옆의 부모 노드로 방문이 넘어가게 된다.   

깊이우선탐색은 회사 조직도에서 부서 단위로 이해하면 된다. 사장 다음에 영업부, 개발부, 디자인부가 있다고 가정하고 각 부서에 부장-대리-사원이 있다. 이를 깊이우선탐색으로 이름을 나열하면 영업부의 부장-대리-사원, 개발부의 부장-대리-사원, 디자인부의 부장-대리-사원 순으로 이름이 나열된다.   

#### DFS 구현하기
구현하기 위해서 부서의 팀원, 자식 노드가 중요하다.   
```unvisitedQueue의 앞에 자식들의 정보를 먼저 넣어주면 될까?```   
BFS의 구현과 차별을 두기 위해 unvisitedQueue를 <b>unvisitedList</b>로 바꾼다. 그리고 unvisitedQueue.push(...current.children)을 <b>unvisitedList.unshift(...current.children)</b>로 바꾸어 사용한다.   

unshift는 자바스크립트 배열 객체의 기본 제공 메소드며 배열 맨 앞에 데이터를 넣어준다. 이렇게 사용하면 우선 순위가 자식들이 우선이 된다.

```
class Tree {
    constructor() {
        this.root = null;
    }

    DFS(fn) {
        if(this.root === null) return;

        const unvisitedList = [this.root];
        while(unvisitedList.length !== 0) {
            const current = unvisitedList.shift();
            unvisitedList.unshift(...current.children);
            fn(current);
        }
    }
}
```
BFS와 대부분 동일하지만 unvisitedList를 사용하였고, unvisitedList.unshift(...current.children)로 list 앞에 넣어주어 자식들을 우선으로 하였다.

#### BFS, DFS 실행
```
const lettersBFS = [];
const lettersDFS = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');

t.BFS(node => lettersBFS.push(node.data));
t.DFS(node => lettersDFS.push(node.data));

console>
BFS> ['a', 'b', 'd', 'c']
DFS> ['a', 'b', 'c', 'd']
```

위를 글로써 이해하기에는 매우 어렵다. 그래서 반복적으로 학습하여 이해하는 것이 좋다.

### 자바스크립트로 이해하기

#### 자바스크립트로 BFS 탐색
BFS 탐색을 위해 두 개의 Queue를 활용한다.   

우선 각 노드와 자식 노드를 설정한다.
```
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};
```

그리고 BFS 탐색을 시작한다.
```
const bfs = (graph, startNode) => {
  let visited = [];
  let needVisit = [];

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(bfs(graph, "A"));

console>
["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
```

위 코드에서 visited는 <b>탐색을 마친 노드</b>를 담는다. needVisit는 <b>탐색해야 할 노드</b>를 담는다. 그리고 needVisit에 시작 노드를 담으며 탐색을 시작한다. while의 반복문을 사용하여 모든 노드를 탐색한다. Queue를 사용하기 때문에 선입선출, <b>shift()</b>를 사용하여 탐색한다. 만약 탐색된 노드가 아니라면 visited에 담는다. 이를 탐색해야 할 노드가 남아있지 않을 때까지 반복한다.   

#### 자바스크립트로 DFS 탐색
자료구조 스택과 큐를 활용한다.   

* needVisit 스택과 visited 큐. 두 개의 자료 구조를 생선한다.   
* 큐와 스택 구현은 별도 라이브러리를 활용할 수 있지만 간단한 배열로 구현할 수 있다.   

DFS에서는 한 개의 스택과 한 개의 큐를 사용한다. 그리고 이전 노드가 아니라 자기 자신과 연결되었던 노드들을 먼저 탐색하기 때문에 스택을 사용한다.   

BFS와 동일하게 각 노드와 자식 노드를 설정한다.
```
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};
```

```
// (graph, 시작 정점)
const dfs = (graph, startNode) => {
  let needVisitStack = [];
  let visitedQueue = [];

  needVisitStack.push(startNode);

  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log(dfs(graph, "A"));

console>
["A", "C", "I", "J", "H", "G", "B", "D", "F", "E"]
```

위 코드에서 needVisitStack는 탐색해야 할 노드를 담는다. visitedQueue는 탐색을 마친 노드를 담는다. 우선 needVisitStack에 시작 노드를 담는다. 그리고 노드가 남아있지 않을 때까지 탐색해야 할 노드가 남아있지 않을 때까지 반복하여 탐색한다.