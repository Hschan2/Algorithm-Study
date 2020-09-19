int main() {
    char input[101] = {0,};
    int count = 0, sum = 0;
    gets(input);

    for(int i=0; i<strlen(input); i++){ // input의 길이만큼
        count = 0;
        if(input[i] == 'c' && (input[i+1] == '=' || input[i+1] == '-')) {
            count = 1;
        } 
        if(input[i] == 'd') {
            if(input[i+1] == '-') {
                count = 1;
            } else if(input[i+1] == 'z' && input[i+2] == '=') {
                count = 2;
            }
        } 
        if((input[i] == 'l' || input[i] == 'n') && input[i+1] == 'j') {
            count = 1;
        } 
        if(input[i] == 's' && input[i+1] == '=') {
            count = 1;
        } 
        if(input[i] == 'z' && input[i+1] == '=') {
            count = 1;
        }
        sum++;
        i += count;
    }
    printf("%d", sum);
}
