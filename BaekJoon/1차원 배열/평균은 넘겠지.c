int main() {
    int input = 0, quiz = 0, score[1000], sum = 0, count = 0; // 사용 변수 초기화
    double multi = 0; // 평균(곲) 변ㅅ 초기화
    scanf("%d", &input); // 학생 수 입력
    
    for(int i=0; i<input; i++) { // 학생 수 만큼 반복
        scanf("%d", &quiz); // 학생의 점수 갯수 입력
            
        for(int j=0; j<quiz; j++) { // 학생의 점수 갯수만큼 반복
            scanf("%d", &score[j]); // 학생의 점수 입력
            sum += score[j]; // 평균값을 구하기 위해 학생의 점수 합산
        }
        multi = (double)sum/quiz; // 평균을 구하기 위해 점수들의 합과 점수 갯수만큼 나눔
        
        for(int x=0; x<quiz; x++) { // 평균이상의 분율을 구하기 위해 점수 갯수만큼 반복
            if(multi < score[x]) { // 평균보다 큰 점수가 있다면
                count++; // 하나씩 증가
            }
        }
        printf("%.3f%%\n", (double)count * 100 / quiz); // 평균보다 큰 점수의 100을 곱한 뒤 점수갯수만큼 나눔 => 평균 이상 분율
        sum = 0; // 이전 값의 정보를 초기화
        multi = 0; // 이전 값의 정보를 초기화
        count = 0;  // 이전 값의 정보를 초기화
    }
}
