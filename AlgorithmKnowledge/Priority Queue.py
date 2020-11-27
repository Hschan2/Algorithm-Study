# 우선순위 큐 => 우선순위가 가장 높은 데이터를 가장 먼저 삭제하는 자료구조
# 데이터를 우선순위에 따라 처리하고 싶을 때 사용
# 스택 => 가장 나중에 삽입된 데이터
# 큐 => 가장 먼저 삽입된 데이터 (공평한 자료구조)
# 우선순위 큐 => 가장 우선순위가 높은 데이터

# 1. 리스트를 사용
# 데이터를 순서대로 넣은 다음에 하나씩 확인해서 추출

# 2. 힙을 이용해서 구현
# N개의 데이터를 힙에 넣었다가 모두 깨내는 작업은 정렬과 동일
# 이진 트리 자료구조 (완전 이진 트리) => 루트 노드부터 시작해 왼쪽 자신 노드, 오른쪽 자식 노드 순서대로 데이터가 차례대로 삽입되는 트리
# 루트 노드를 제거하며 동작
# 최소 힙 - 루트 노드가 가장 작은 값, 가장 작은 값을 가진 데이터를 우선적으로 제거
# 최대 힙 - 루트 노드가 가장 큰 값, 값이 큰 데이터가 우선적으로 제거

# 부모 노드가 최소 힙 조건에 적합하지 않을 때
# min-Heapify() => 최소 힙 구성 함수, 부모 노드를 거슬러 올라가며, 부모보다 자신의 값이 더 작은 경우에 위치 교체

# 힙에서 원소가 제거될 때
# 원소가 제거 되었을 때 O(logN)의 시간 복잡도로 힙 성질을 유지하도록 함
#     원소를 제거할 때는 가장 마지막 노드가 루트 노드의 위치에 오도록 한다.
#     그리고 다시 부모 노드가 가장 작은 값이다는 최소 힙 조건을 맞추기 위해 min-Heapify()를 실행

import sys
import heapq # 파이선은 기본적으로 min-heapify() 기준으로 한다.
input = sys.stdin.readline

def heapsort(iterable):
    h = []
    result = []
    # 모든 원소를 차례대로 힙에 삽입
    for value in iterable:
        heapq.heappush(h, value)
    # 힙에 삽입된 모든 원소를 차례대로 꺼내어 담기
    for i in range(len(h)):
        result.append(heapq.heappop(h))
    return result

n = int(input())
arr = []

for i in range(n):
    arr.append(int(input()))

res = heapsort(arr)

for i in range(n):
    print(res[i])
