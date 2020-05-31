int  main() {
    char input[1000001] = {0};
    int al[26], max = 0, export = 0, count = 0;
    scanf("%s", input);
    
    for(int i=0; input[i]!=0; i++) {
        if(input[i] < 91) { // 입력한 단어가 소문자냐 대문자냐 검사
            al[input[i] - 65]++; // 해당 알파벳의 증가
        } else {
            al[input[i] - 97]++; // 해당 알파벳의 증가
        }
    }
    
    for(int i=0; i<26; i++) {
        if(al[i] > max) {
            max = al[i]; // 제일 많이 나온 알파벳 넣기 
            export = i;
        }
    }
    
    for(int i=0; i<26; i++) {
        if(max == al[i]) { // 입력된 각 총 알파벳 갯수와 입력된 단어 알파벳 비교, 2이상이 있는지 없는지 확인
            count++;
        }
    }
    if(count > 1) { // 2 이상은 ? 출력
        printf("?");
    } else {
        printf("%c", export + 65); // 대문자로 출력
    }
}
