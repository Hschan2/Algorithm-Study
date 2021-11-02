// 문제
// 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

// 입력
// 첫째 줄에 1보다 크거나 같고, 106보다 작거나 같은 정수 N이 주어진다.

// 출력
// 첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.

import java.util.*;

public class Main
{
    public static void main(String args[]) throws Exception
    {
        // 입력하기
        Scanner sc = new Scanner(System.in);
        
        // Int 형으로 변환
        int value = sc.nextInt();
        
        if (value == 1) { // 이미 1이기 때문에 0
            System.out.println("0");
        } else if (value == 2 || value == 3) { // 2 혹은 3 이면 즉시 나누어지는 숫자이기 때문에 1
            System.out.println("1");
        } else {
            // 입력한 값의 1 더 큰 크기
            int[] count = new int[value + 1];
            
            // 모든 숫자 양수로 설정
            for (int i = 1; i <= value; i++) {
                count[i] = Integer.MAX_VALUE;
            }
            
            // 1, 2, 3 일 경우 출력할 값 미리 설정
            count[1] = 0;
            count[2] = 1;
            count[3] = 1;
            
            // 3 까지 값을 설정하고 그 다음부터 반복
            for (int i = 4; i <= value; i++) {
                if (i % 3 == 0) { // 3으로 나누어지면
                    count[i] = Math.min(count[i / 3] + 1, count[i]); // 이미 한 번의 카운트를 한 것을 생각하여 + 1
                } 
                if (i % 2 == 0) { // 2로 나누어지면
                    count[i] = Math.min(count[i / 2] + 1, count[i]);
                }
                count[i] = Math.min(count[i], count[i - 1] + 1); // 나누어지지 않으면 1 빼기
            }
            
            System.out.println(count[value]);
        }
    }
}