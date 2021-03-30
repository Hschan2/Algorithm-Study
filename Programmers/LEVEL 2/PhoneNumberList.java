// 전화번호 목록
// 문제 설명
// 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
// 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

// 구조대 : 119
// 박준영 : 97 674 223
// 지영석 : 11 9552 4421
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// phone_book의 길이는 1 이상 1,000,000 이하입니다.
// 각 전화번호의 길이는 1 이상 20 이하입니다.
// 같은 전화번호가 중복해서 들어있지 않습니다.
// 입출력 예제
// phone_book	return
// ["119", "97674223", "1195524421"]	false
// ["123","456","789"]	true
// ["12","123","1235","567","88"]	false
// 입출력 예 설명
// 입출력 예 #1
// 앞에서 설명한 예와 같습니다.

// 입출력 예 #2
// 한 번호가 다른 번호의 접두사인 경우가 없으므로, 답은 true입니다.

// 입출력 예 #3
// 첫 번째 전화번호, “12”가 두 번째 전화번호 “123”의 접두사입니다. 따라서 답은 false입니다.

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        
        for(int i = 0; i < phone_book.length; i++) {
            for(int j = 0; j < phone_book.length; j++) {
                // ===로 사용할 경우, error: illegal start of expression
                if(i == j) continue;
                
                // indexOf를 사용하여 접두사 확인 (0이면 접두사) 
                if(phone_book[j].indexOf(phone_book[i]) == 0) return false;
            }
        }
        
        return answer;
    }
}

// => 효율성 테스트 3, 4 통과 X

// Hash를 이용한 다른 사람의 풀이
// 효율성 테스트 모두 통과
import java.util.HashMap;
import java.util.Arrays;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        Arrays.sort(phone_book);  // 정렬
        HashMap<String, String> checker = new HashMap<>();

        for(int j = 0; j < phone_book.length; j++){
            String arg = phone_book[j];
            checker.put(arg, arg);  // 확인할 대상 넣기
            for(int i = 0; i < arg.length(); i++){ // 본인의 키 값 패턴이 다른곳에도 있는가 확인
                String mini = arg.substring(0,i);  // 키 값을 하나씩 늘려가기
                if(checker.get(mini) != null){  // 키 값 조사하여 확인, 접두어가 있을 경우
                    answer = false;
                    break;
                }
            }
        }
        return answer;
    }
}