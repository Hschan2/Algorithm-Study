/*
int function(int n) {
    int des = n, deunghan, a, b, pos[3];
    for(int i=1;  i<=des; i++) {
        if(i < 100) deunghan = i;
        else if(i == 1000) break;
        else {
            a = 0; 
            b = i;
            while(b > 0) {
                pos[a] = b % 10;
                b /= 10;
                a++;
            }
            if(pos[0] - pos[1] == pos[1] - pos[2]) deunghan++;
        }
    }
    return deunghan;
}
*/

int main() {
    int input, deunghan, a, b, pos[3];
    
    scanf("%d", &input);
    //function(input);
    
    for(int i=1;  i<=input; i++) {
        if(i < 100) deunghan = i;
        else if(i == 1000) break;
        else {
            a = 0; 
            b = i;
            while(b > 0) {
                pos[a] = b % 10;
                b /= 10;
                a++;
            }
            if(pos[0] - pos[1] == pos[1] - pos[2]) deunghan++; // 첫번째 자릿수와 두번째 자릿수의 뺄샘의 값이 두번째 자릿수와 세번째 자릿수의 뺄샘과 같다 => 등차다
        }
    }
    printf("%d\n", deunghan);
}
