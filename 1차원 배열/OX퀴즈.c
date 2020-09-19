int main() {
    int input, sum, con;
    char ox[81];
    scanf("%d", &input);
    
    for(int i=0; i<input; i++) {
        scanf("%s", ox);
        sum = 0;
        con = 1;
        
        for(int j=0; ox[j]!=0; j++) {
            if(ox[j] == 'O') {
                sum += con;
                con++;
            } else {
                con = 1; // X면 con값 초기화
            }
        }
        printf("%d\n", sum);
    }
}
