int main() {
    int input, score[1001] = {0};
    float max = 0, sum = 0;
    scanf("%d", &input);
    
    for(int i=0; i<input; i++) {
        scanf("%d", &score[i]);
        if(score[i] > max) max = score[i];
    }
    
    for(int i=0; i<input; i++) {
        sum += score[i] / max * 100;
    }
    printf("%f\n", sum/input);
}
