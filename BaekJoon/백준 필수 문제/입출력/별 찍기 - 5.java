// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 3개, ..., N번째 줄에는 별 2×N-1개를 찍는 문제

// 별은 가운데를 기준으로 대칭이어야 한다.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

import java.util.*;

public class Main
{  
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        
        sc.close();
    
        for(int i = 0; i < a; i++) {
            // a - i - 1 => a - i일 경우 빈 공간이 하나 더 생기기 때문에 -1
            // 4(i = 0) 3(i = 1) 2(i = 2) 1(i = 3) 0(i = 4)
            for(int j = 0; j < a - i - 1; j++) {
                System.out.print(" ");
            }
            // 1(i = 0) 3(i = 1) 5(i = 2) 7(i = 3) 9(i = 4) 순으로 증가하기 때문에
            for(int k = 0; k < i * 2 + 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}