// 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

// 출력
// 입력으로 주어진 숫자 N개의 합을 출력한다.

import java.util.*;

public class Main
{  
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        
        int count = sc.nextInt();
        String value = sc.next(); // 한 문장으로 더해야 할 모든 값 입력
        int sum = 0;

        for (int i = 0; i < count; i++) {        
            sum += value.charAt(i) - '0'; // - '0'은 아스키 코드를 입력받은 숫자 값 그대로로 바꾸기 위해
        }

        sc.close();
        
        System.out.println(sum);
    }
}