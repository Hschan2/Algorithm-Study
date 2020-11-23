int main() {
    int a,b,c,loss;
    scanf("%d %d %d", &a, &b, &c);
    getchar();
    
    loss = c - b;
    
    if(loss <= 0) {
        printf("-1\n");
    } else {
        printf("%d\n", (a/loss) + 1);
    }
}
