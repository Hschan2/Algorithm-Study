int main() {
    int input, result = 1, compare = 1;
    scanf("%d", &input);
    
    if(input == 1) {
        result = 1;
    } else {
        for(int i=2; i<=input; i++) {
            if(compare + (result-1) *6 < i){
                result++;
                compare = i - 1;
            }
        }
    }
    printf("%d\n",result);
}
