int main() {
    int a;
    
    scanf("%d", &a);
    
    for(int i=0;i<a*2;i++) {
        if(i%2 == 0) {
            for(int j=0;j<a;j++) {
                if(j%2 == 1 && j != a-1)
                    printf(" ");
                if(j%2 == 0)
                    printf("*");
            }
            printf("\n");
        } else {
            for(int j=0;j<a;j++) {
                if(j%2 == 1)
                    printf("*");
                if(j%2 == 0 && j != a-1)
                    printf(" ");
            }
            printf("\n");
        }
    }
}
