int main() {
    int input, a, b, sum=0;
    scanf("%d", &input);
    
    for(int i=1; i<=input; i++) {
        scanf("%d %d", &a, &b);
        printf("Case #%d: %d + %d = %d\n", i, a, b, a+b);
    }
}
