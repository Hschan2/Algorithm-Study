int function(int a, int b, int c) {
    if((b / a) % 3 == 1 && (c / a) % 3 == 1) {
        printf(" ");
    } else {
        if(a/3 == 0) {
            printf("*");
        } else {
            function(a/3, b, c);
        }
    }
}

int main() {
    int input;
    scanf("%d", &input);
    
    for(int i=0; i<input; i++) {
        for(int j=0; j<input; j++) {
            function(input, i, j);
        }
        printf("\n");
    }
}
