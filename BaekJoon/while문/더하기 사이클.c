int main() {
    int input, ten, one, temp, sum = 0, count = 0;
    scanf("%d", &input);
    temp = input;
    while(1) { // 무한적으로 반복
        if(temp < 10) ten = 0; // 입력한 수가 10보다 작으면 십자리 수에 0
        else ten = temp/10; // 입력한 수가 10보다 크면 입력한 수의 10을 나눠 십자리 수 가져오기
        one = temp%10; // 입력한 수를 10로 나눠 나머지를 일에 자리 입력
        
        sum = ten + one; // 십의 자리와 일의 자리를 더하기 -> 사이클 1회
        count++;
        
        ten = temp%10; // 입력한 수를 10으로 나눠 나머지
        one = sum%10; // 이전에 더한 값에 10을 나눠 나머지
        temp = (ten*10) + one; // 십의 자리에 숫자는 한자리 수이기 때문에 십 단위로 교체 후 일의 자리 더하기
        
        if(temp == input) { // 사이클이 돌고 있는 입력값과 처음에 입력한 값이 같을 때 멈춤
            break;
        }
    }
    printf("%d", count);
}
