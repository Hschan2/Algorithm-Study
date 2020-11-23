int main() {
    int input, count, max = 0, a;
    
    for(int i=1;i<=9;i++) {
        scanf("%d\n", &count);
        
        if(max < count) {
            max = count;
            a = i;
        }   
    }
    printf("%d\n%d", max, a);
}
