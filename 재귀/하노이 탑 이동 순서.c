int count(int n){
    int d=1;
    for(int i=2;i<=n;++i) d = 2*d+1; // 원판의 이동 횟수는 입력값의 제곱값 + 1 이다
    // 1일 때는 반복문이 안돌고 1이 그대로 출력
    // 2일 때는 반복문이 한 번만 돌고 계산하여 3이 출력
    // 3일 때는 반복문이 2번 돌고 계산하여 처음에는 3이 입력 다음에는 2*3+1로 7이 출력
    // i가 1부터 시작하지 않는 이유는 n이 1일 때 반복문이 돌지 않고 그대로 1이 출력되야 하기 때문
    return d;
}
 
void hanoi(int n, int a, int b, int c){ // n은 원판 개수 a는 시작점 b는 이동할 점 c는  n-1이 먼저 갈 곳
    if(1==n) { printf("%d %d\n",a,c); return; } // 1개는 이동이 한 번이기 때문
     
    hanoi(n-1,a,c,b); // 맨 아래의 원판을 제외한 나머지 원판들
    printf("%d %d\n",a,c); // 이동할 때마다 좌표 찍어줌
    hanoi(n-1,b,a,c); // 맨 아래의 원판을 제외한 나머지 원판들
}
 
int main(){
    int input;
    scanf("%d",&input);
    printf("%d\n",count(input));
    hanoi(input,1,2,3); // 원판개수, 첫번째 위치, 두번째 위치, 세번째 위치
}
