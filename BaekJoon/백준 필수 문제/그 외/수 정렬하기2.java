// 문제
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

// 출력
// 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.ArrayList; 
import java.util.Collections;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        // 값 쓰기와 읽기
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        // Int 형으로 변환
        int values = Integer.parseInt(br.readLine());
        
        // 값을 담을 배열 선언
        ArrayList<Integer> arrays = new ArrayList<Integer>();
        
        // 모든 값 배열에 담기
        for (int i = 0; i < values; i++) {
            arrays.add(Integer.parseInt(br.readLine()));
        }
        
        // Buffer를 사용하여 Array.sort보다 Collections.sort로 정렬
        Collections.sort(arrays);
        
        // 배열 안 값 읽기
        for (int i = 0; i < values; i++) {
            bw.write(arrays.get(i) + "\n");
        }
        
        // Buffer 정리하고 닫기
        bw.flush();
        bw.close();
        
    }
}