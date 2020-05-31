int pat(int n) {
    int mul = 1;
    for(int i=n; i>0; i--) {
        mul *= i;
    }
    return mul;
    //printf("%d\n", mul);
}

int main() {
    int input, des;
    scanf("%d", &input);
    
    /*
    for(int i=input; i>0; i--) {
        multi *= i;
    }
    printf("%d\n", multi);
    */
    des = pat(input);
    printf("%d\n", des);
}
