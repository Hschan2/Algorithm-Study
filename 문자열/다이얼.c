int main() {
    char input[15] = {0};
    int dial = 0;
    scanf("%s", input);
    
    for(int i=0; input[i]!=0; i++) {
        if(input[i] >= 65 && input[i] <= 67)
            dial += 3;
        else if(input[i] >= 68 && input[i] <= 70)
            dial += 4;
        else if(input[i] >= 71 && input[i] <= 73)
            dial += 5;
        else if(input[i] >= 74 && input[i] <= 76)
            dial += 6;
        else if(input[i] >= 77 && input[i] <= 79)
            dial += 7;
        else if(input[i] >= 80 && input[i] <= 83)
            dial += 8;
        else if(input[i] >= 84 && input[i] <= 86)
            dial += 9;
        else if(input[i] >= 87 && input[i] <= 90)
            dial += 10;
        else if(input[i] == 0)
            dial += 11;
        else if(input[i] == 1)
            dial += 2;
    }
    
    printf("%d\n", dial);
}
