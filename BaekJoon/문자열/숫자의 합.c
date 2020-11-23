int main() {
    int input, sum = 0;
    char number[101] = {0};
    scanf("%d", &input);
    scanf("%s", number); // %c는 문자 하나, %s는 문자열
    
    for(int i=0; i<input; i++) {
        sum += number[i] - 48; // 아스키 코드때문에, 문자로 1을 입력하면 아스키 코드로 49가 출력 그래서 48을 뺀다.
    }
    printf("%d\n", sum);
}
