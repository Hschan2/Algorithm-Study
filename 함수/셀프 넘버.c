int index[10001]; // 전역변수일 시 자동으로 0으로 초기화, 길이가 10000 이상일 경우 지역변수는 런타임 에러

int function(int n) { // n 을 인수로 넘김
    int result = n; // function에서 쉽게 사용하기 위해 n값 전달
    if(result >= 10000) { // 만약 10000이면 1+0+0+0+0 으로 만들기 위해
        result += n / 10000; 
        n %= 10000;
    }
    if(result >= 1000) { // 만약 10000이면 1+0+0+0+0 으로 만들기 위해
        result += n / 1000;
        n %= 1000;
    }
    if(result >= 100) { // 만약 10000이면 1+0+0+0+0 으로 만들기 위해
        result += n / 100;
        n %= 100;
    }
    if(result >= 10) { // 만약 10000이면 1+0+0+0+0 으로 만들기 위해
        result += n / 10;
        n %= 10;
    }
    return result += n;
}

int main() {
    for(int i= 1; i<=10000; i++) { // 1 ~ 10000 (10000보다 작거나 같은 셀프 넘버)
        index[function(i)] = 1;
        if(!index[i]) {
            printf("%d\n", i);
        }
    }
}
