int main() {
    int input, sum = 0, i, demon, numer; // 분모, 분자
    
    scanf("%d", &input);
    
    for(i=1; i<=input; i++) { // break 하기전까지 i 값은 저장
        sum += i; // 
        if(input <= sum) {
            break;
        } // 최종 i값이 그룹의 숫자
    }
    if(i%2 == 0) {
        numer = (sum - input) + 1; // 분자, 그룹의 숫자로 시작
        demon = i + 1 - numer; // 분모, 그룹의 숫자 - 분자 + 1로 시작
    } else {
        demon = (sum - input) + 1; // 위와 반대
        numer = i + 1 - demon; // 위와 반대
    }
    printf("%d/%d\n", demon, numer);
}
