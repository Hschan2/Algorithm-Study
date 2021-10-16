// 문제
// 정렬되어있는 두 배열 A와 B가 주어진다. 두 배열을 합친 다음 정렬해서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 배열 A의 크기 N, 배열 B의 크기 M이 주어진다. (1 ≤ N, M ≤ 1,000,000)

// 둘째 줄에는 배열 A의 내용이, 셋째 줄에는 배열 B의 내용이 주어진다. 배열에 들어있는 수는 절댓값이 109보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 두 배열을 합친 후 정렬한 결과를 출력한다.

import java.util.*;
import java.io.*;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        // 값 쓰기와 읽기
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        // n과 m값 입력하기 (br의 첫 번째 한 줄 읽기)
        StringTokenizer st = new StringTokenizer(br.readLine());
        // (br의 두 번째 한 줄 읽기)
        StringTokenizer nValues = new StringTokenizer(br.readLine());
        // (br의 세 번째 한 줄 읽기)
        StringTokenizer mValues = new StringTokenizer(br.readLine());
        
        // 값을 담을 배열 선언
        ArrayList<Integer> arrays = new ArrayList<Integer>();
        
        // Int 형으로 변환
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        // 모든 값 배열에 담기
        for (int i = 0; i < n; i++) {
            arrays.add(Integer.parseInt(nValues.nextToken()));
        }
        
        for (int i = 0; i < m; i++) {
            arrays.add(Integer.parseInt(mValues.nextToken()));
        }
        
        // Buffer를 사용하여 Array.sort보다 Collections.sort로 정렬
        Collections.sort(arrays);
        
        // 배열 안 값 읽기
        for (int i = 0; i < arrays.size(); i++) {
            bw.write(arrays.get(i) + " ");
        }
        
        // Buffer 정리하고 닫기
        bw.flush();
        bw.close();
        
    }
}