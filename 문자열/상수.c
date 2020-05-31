int main() {
    int first, second, firstsum = 0, secondsum = 0;
    scanf("%d %d", &first, &second); // 두 수 입력
    
    firstsum = (first % 10) * 100 + (first / 10) % 10 * 10 + (first / 100) % 10;
    // 1. 1의 자릿수를 찾고 100을 곱, 2. 1의 자릿수를 없애고 가운데 자릿수를 찾고 10을 곱
    // 3. 1의 자릿수와 10의 자릿수를 없애고 100의 자릿수를 1의 자릿수로.
    secondsum = (second % 10) * 100 + (second / 10) % 10 * 10 + (second / 100) % 10;
    
    printf("%d", firstsum > secondsum ? firstsum : secondsum);
}
