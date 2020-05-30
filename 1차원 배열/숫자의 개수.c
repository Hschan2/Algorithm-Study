int main() {
    int input[3], count[10],multi = 1, n;
    
    for(int i=0; i<10; i++) {
        count[i] = 0;
    }
    
    for(int i=0; i<3; i++) {
       scanf("%d", &input[i]);
       multi = multi * input[i];
    }
    
    for(int i=0; multi>0; i++) {
        n = multi%10;
        count[n] += 1;
        multi = multi/10;
    }
    
    for(int i=0; i<10; i++) {
        printf("%d\n", count[i]);
    }
}
