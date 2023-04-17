
/**
기업신용과 개인신용으로 연봉을 더한 총합이 기존 대출 비용과 합친 비용이 원하는 대출 비용보다 크면 대출불가능(0), 작으면 대출가능(1)

기업신용이 1이면 500%, 2이면 400%, 3이면 300%, 4이면 200%, 5이면 100%
개인신용이 1이면 1000원, 2이면 500원, 3이면 300원, 4이면 100원, 5이면 0원

loans가 [[1, 1, 5000, 11000, 10000], [4, 5, 4000, 5000, 6000], [2, 3, 2500, 5000, 6000]]로 주어졌을 때, 대출이 가능하면 answer 배열 변수에 1을 추가하고, 불가능하면 answer 배열 변수에 0을 추가하라.

예. loans의 첫 번째 배열은 기업신용과 개인신용이 1이며, 연봉이 5000이고, 기존대출금이 11000원이고, 대출받고 싶은 금액이 10000원이다.
기업신용이 1이기 때문에 연봉의 *5를, 개인신용이 1이기 때문에 +1000원을 하여 총 26000원 대출이 가능하다. 기존 대출금 11000원을 제외한 15000원 대출이 가능하기 때문에 대출받고 싶은 금액인 10000원을 대출할 수 있어 answer 배열변수에 1을 추가한다.

아래의 JAVA코드를 활용 가능
solution(int[][] loans) {
int[] answer = {};
return answer;
}
*/

// 내가 작성한 코드
import java.util.ArrayList;

public class main
{
    public static void main(String[] args)
    {
        int[][] loans = {{1, 1, 5000, 11000, 10000}, {4, 5, 4000, 5000, 6000}, {2, 3, 2500, 5000, 6000}};
        ArrayList<Integer> answer = new ArrayList<>();

        for (int i = 0; i < loans.length; i++) {
            int total = loans[i][2];
			if (loans[i][0] == 1) {
                total = total * 5;
            } else if (loans[i][0] == 2) {
                total = total * 4;
            } else if (loans[i][0] == 3) {
                total = total * 3;
            } else if (loans[i][0] == 4) {
                total = total * 2;
            } else if (loans[i][0] == 5) {
                total = total * 1;
            }

            if (loans[i][1] == 1) {
                total = total + 1000;
            } else if (loans[i][0] == 2) {
                total = total + 500;
            } else if (loans[i][0] == 3) {
                total = total + 300;
            } else if (loans[i][0] == 4) {
                total = total + 100;
            } else if (loans[i][0] == 5) {
                total = total + 0;
            }

            if ((total - loans[i][3]) >= loans[i][4]) {
                answer.add("1");
            } else {
                answer.add("0");
            }
		}
        
        System.out.print(answer);
    }
}

// 수정한 코드
import java.util.Arrays;

public class main
{
    public static void main(String[] args)
    {
        int[][] loans = {{1, 1, 5000, 11000, 10000}, {4, 5, 4000, 5000, 6000}, {2, 3, 2500, 5000, 6000}};
        int[] answer = new int[loans.length];
    
        for (int i = 0; i < loans.length; i++) {
            int corporateScore = loans[i][0];
            int personalScore = loans[i][1];
            int salary = loans[i][2];
            int currentLoan = loans[i][3];
            int desiredLoan = loans[i][4];
            
            int personalScoreValue = 0;
            switch(personalScore) {
                case 1:
                    personalScoreValue = 1000;
                    break;
                case 2:
                    personalScoreValue = 500;
                    break;
                case 3:
                    personalScoreValue = 300;
                    break;
                case 4:
                    personalScoreValue = 100;
                    break;
                case 5:
                    personalScoreValue = 0;
                    break;
            }
            int maxLoan = salary * (6 - corporateScore) + personalScoreValue;
            int availableLoan = maxLoan - currentLoan;
            
            if (availableLoan >= desiredLoan) {
                answer[i] = 1;
            } else {
                answer[i] = 0;
            }
        }

        System.out.println(Arrays.toString(answer));
    }
}