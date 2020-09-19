 int main() {
    char input[101] = {0};
    int com[26] = {0}; // 알파벳 숫자만큼 26개 선언
    scanf("%s", input);
    
    for(int i=0; i<26; i++) {
        com[i] = -1; // 알파벳 26개의 기본값을 -1로 설정
    }
    
    for(int i='a'; i<='z'; i++) { // 알파벳 검사 때문, a~z 확인
        for(int j=0; j<100; j++) { // input 안에 있는 문자 최대개수까지
            if(input[j] == i) { // input 안에 입력되어 있는 알파벳과 a~z 사이 비교
                com[i - 97] = j; // 아스키코드 때문에 i에서 97을 빼야 한다.
                break; // com[i - 97] = j값을 넣고 단계를 끝내라
            }
        }
    }
    for(int i=0; i<26; i++) {
         printf("%d ", com[i]); // 입력한 단어의 알파벳 출력
    }
}
