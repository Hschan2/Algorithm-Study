// 문제
// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

import java.util.*;

public class Main
{  
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        
        sc.close();
    
        for(int i = 1; i <= a; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for(int k = 1; k <= 2 * (a - i); k++) {
                System.out.print(" ");
            }
            for(int l = 1; l <= i; l++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        for(int i = a - 1; i > 0; i--) {
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            for(int k = 1; k <= 2 * (a - i); k++) {
                System.out.print(" ");
            }
            for(int l = 1; l <= i; l++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}