int main(int argc, char* argv[]) {
	int a;
    
    scanf("%d", &a);
    
    for(int i=0;i<a;i++) {
        for(int j=0;j<i;j++) 
            printf(" "); // 첫 번째는 0으로 j == i 가 되므로 " " 미적용
        
        for(int n=2*(a-i-1);n>=0;n--)
            printf("*"); // 첫 번째 줄은 빈 칸이 없으므로 모두 출력해야 하는 순서.
                        // 5입력 시 9개 이므로 2*(5-0-1) = 9
        printf("\n");
    }
    
    for(int i=2;i<=a;i++) {
        for(int j=1;j<=a-i;j++)
            printf(" ");
        
        for(int n=1;n<=(2*i)-1;n++)
            printf("*");
        
        printf("\n");
    }
}
