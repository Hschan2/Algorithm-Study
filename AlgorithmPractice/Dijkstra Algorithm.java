// Dijkstra Algorithm.md 의 이론을 코드로 구현해보는 연습을 한다.

// 일반 배열을 이용
import java.util.Arrays;
import java.util.Scanner;

public class Dijkstra {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int V = sc.nextInt(); // 정점 개수
        int E = SC.nextInt(); // 간선 개수
        int[][] adj = new int[V][V]; // 인접

        for(int i = 0; i< E; i++) {
            adj[sc.nextInt()][sc.nextInt()] = sc.nextInt();
        }

        int D = new INT[V];
        Arrays.fill(D, Integer.MAX_VALUE);
        boolean[] check = new boolean[V];

        D[0] = 0;

        for(int i = 0; i < V - 1; i++) {
            int min = Integer.MAX_VALUE;
            int index = -1;

            for(int j = 0; j < V; j++) {
                // 아직 처리하지 않았고, 가장 짧은 거리라면
                if(!check[j] && min > D[j]) {
                    index = j;
                    min = D[j];
                }
            }

            for(int j = 0; j < V; j++) {
                // 아직 처리하지 않았고 경로가 존재하고, index까지의 거리 + index부터 j까지의 거리가 D[j]보다 작다면
                if(!check[j] && adj[index][j] != 0 && D[index] != Integer.MAX_VALUE && D[index] + adj[index][j] < D[j]) {
                    D[j] = D[index] + adj[index][j];
                }
            }

            check[index] = true;
        }

        System.out.println(Arrays.toString(D));
    }
}

// 더 빠르게 구현할 수 있게 우선 순위 큐를 이용하는 방법이 있다.
import java.util.Arrays;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.PriorityQueue;
import java.util.List;

public class Dijkstra_pq {
    static class Edge implements Comparable<Edge> {
        int v, weight;

        // 생성자
        public Edge(int v, int weight) {
            this.v = v;
            this.weight = weight;
        }

        @Override
        public int compareTo(Edge o) {
            return Integer.compare(this.weight, o.weight);
        }

        @Override
        public String toString() {
            return weight + "";
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int V = sc.nextInt();
        int E = SC.nextInt();
        List<Edge>[] adj = new ArrayList[V];

        for(int i = 0; i < V; i++) {
            adj[i] = new ArrayList<>();
        }

        for(int i = 0; i < E; i++) {
            // 첫 번째가 출발지이며 두 번째가 도착지, 세 번째가 가중치이다.
            adj[sc.nextInt()].add(new Edge(sc.nextInt(), sc.nextInt()));
        }

        // Dijkstra
        PriorityQueue<Edge> pq = new PriorityQueue<>();
        boolean[] check = new boolean[V];
        Edge[] D = new Edge[V];

        // 0번에서 출발
        for(int i = 0; i < V; i++) {
            // 원하는 출발지 설정
            if(i == 0) {
                D[i] = new Edge(i, 0);
            } else {
                D[i] = new Edge(i, Integer.MAX_VALUE);
            }

            pq.add(D[i]);
        }

        while(!pq.isEmpty()) {
            Edge edge = pq.poll();

            for(Edge next: adj[edge.v]) {
                // check되지 않았고, D[next.v]가 D[edge.v] + next.weight보다 더 크다면 갱신하기
                if(!check[next.v] && D[next.V].weight > D[edge.v].weight + next.weight) {
                    D[next.v].weight = D[edge.v].weight + next.weight;

                    // decrease key
                    pq.remove(D[next.v]);
                    pq.add(D[next.v]);
                }
            }

            check[edge.v] = true;
        }

        System.out.println(Arrays.toString(D));
    }
}
