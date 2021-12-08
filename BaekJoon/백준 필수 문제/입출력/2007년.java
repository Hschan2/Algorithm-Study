// 문제
// 오늘은 2007년 1월 1일 월요일이다. 그렇다면 2007년 x월 y일은 무슨 요일일까? 이를 알아내는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 빈 칸을 사이에 두고 x(1 ≤ x ≤ 12)와 y(1 ≤ y ≤ 31)이 주어진다. 참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.

// 출력
// 첫째 줄에 x월 y일이 무슨 요일인지에 따라 SUN, MON, TUE, WED, THU, FRI, SAT중 하나를 출력한다.

import java.util.*;

public class Main
{  
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        
        int month = sc.nextInt();
        int day = sc.nextInt();
        
        sc.close();
        
        int[] Months = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        String[] Days = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
        int allDay = day;

        // 1월일 경우, 입력한 day값만 있어야 하므로 입력한 month에서 -1을 해야 한다.
        // 만약 12월 31일 경우, month에 12를 day에 31을 입력하면 11월까지의 총 합과 day의 합을 더하면 된다.
        for (int i = 0; i < month - 1; i++) {   
            allDay += Months[i];
        }
        
        System.out.println(Days[allDay % 7]);
    }
}