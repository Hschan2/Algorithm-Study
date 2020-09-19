int main() {
    char input[1000002] = {0};
    int count = 1;
    gets(input);
    
    if(input[0]==' ') {
        count = count - 1;
    }
    for(int i=0; input[i]!=0; i++) {
        if(input[i] == ' ') {
            count++;
            if(input[i+1]==0) {
                if(input[i]==' ') {
                    count = count - 1;
                }
            }
        }
    }
    printf("%d", count);
}
