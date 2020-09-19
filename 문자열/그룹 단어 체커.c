int main() {
    int input, check = 1, count = 0;
    scanf("%d", &input);
    getchar();
    
    for(int i=0;i<input;i++) {
        check = 1;
        char word[101] = {0};
        int alp[27] = {0};
        gets(word);
    
        for(int j=0;j<strlen(word);j++) {
            if(alp[word[j] - 'a'] == 1) {
                check = 0;
                break;
            }
            if(word[j] != word[j+1]) {
                alp[word[j] - 'a'] = 1;
            }
        }
        if(check == 1) {
            count++;
        }
    }
    printf("%d", count);
}
