int main() {
    int a, b;
    char input[21] = {0};
    scanf("%d", &a);
    
    for(int i=0; i<a; i++) {
        scanf("%d %s", &b, input);
        
        for(int q=0; input[q]!=0; q++) {
            for(int w=0; w<b; w++) {
                printf("%c", input[q]);
            }
        }
        printf("\n");
    }
}
