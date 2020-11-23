int main() {
    int input, result = 0;
    scanf("%d", &input);
    getchar();
    
    while(1) {
        if(input % 5 == 0) {
            result += input / 5;
            printf("%d", result);
            break;
        }
        
        input -= 3;
        result += 1;
        
        if(input < 0) {
            printf("-1\n");
            break;
        }
    }
}
