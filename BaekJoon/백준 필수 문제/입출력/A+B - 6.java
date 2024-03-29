// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. A와 B는 콤마(,)로 구분되어 있다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

import java.util.*;

public class Main
{  
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            String[] a = sc.next().split(",");
            int sum = 0;
            
            for (int j = 0; j < a.length; j++) {
                sum += Integer.parseInt(a[j]);
            }
            
            System.out.println(sum);
        }

        sc.close();
    }
}

import java.util.*;

public class Main
{  
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            String[] numbers = sc.next().split(",");
            
            System.out.println(Integer.parseInt(numbers[0]) + Integer.parseInt(numbers[1]));;
        }

        sc.close();
    }
}