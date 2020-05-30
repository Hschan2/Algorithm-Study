int main() {
    int num[10] = {0}, com[42] = {0}, cnt = 0;
    
    for(int i=0; i<10; i++) {
        scanf("%d", &num[i]);
        com[num[i] % 42]++;
    }
    for(int i=0; i<42; i++) {
        if(com[i] > 0) { // 나머지 수의 0 ~ 42이 있으면 cnt 1씩 증가, 중복이 나올 수가 없다. 42가 두 개 있어도 마지막에 42가 있는지 한 번 확인해서 있으면 +1을 하기 때문
            cnt++;
        }
    }
    printf("%d\n", cnt);
}
