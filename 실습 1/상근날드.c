int  main() {
    int a[5] = {0};
    int aSize = sizeof(a)/sizeof(int);
    
    for (int i=0; i<aSize; i++) {
        scanf("%d", &a[i]);
    }
    
    int burger = a[0];
    int juice = (a[3] < a[4]) ? a[3] : a[4];
    
    if(burger > a[1]) {
        burger = a[1];
    }
    if(burger > a[2]) {
        burger = a[2];
    }
    
    printf("%d", burger + juice - 50);
}    
