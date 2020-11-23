#include <stdio.h>

int main() {
    int a, b, c, result;
    
    scanf("%d %d %d", &a, &b, &c);
    
    result = (c - b - 1) / (a - b) + 1; // (c - b - 1) / (a - b)을 계산하고 +1 한다
    // 낮에 도달하면 밤에 미끄러지는 일이 없어야 한다 => C - B만큼 올라가는 것
    // (c - b) / (a - b)가 바로 답이 되지 않으면 +1을 한 것이 정답
    // int형은 나누어서 답이 바로 나오는지 확인이 힘들기 때문에 미리 -1을 하고 계산
    printf("%d\n", result);
}
