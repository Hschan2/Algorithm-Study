// 문제
// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

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
    
        for (int i = 1; i <= a; i++) {
            for (int j = 0; j < a - i; j++) {
                System.out.printf(" ");
            }
            
            // 중간 줄은 양 쪽에 두개 씩만 * 출력되도록
            // k를 0부터 시작하기 때문에 k == i * 2 - 2로 해야 오른쪽에 * 출력
            // 조건문 사용한 이유는 마지막 즐은 제외
            if (i != a) {
                for (int k = 0; k < i * 2 - 1; k++) {
                    if (k == 0 || k == i * 2 - 2) System.out.printf("*");
                    else System.out.printf(" ");
                }
                System.out.printf("\n");
            }
        }
        
        // 맨 마지막 줄
        for (int i = 0; i < a * 2 - 1; i++) {
            System.out.printf("*");
        }
    }
}