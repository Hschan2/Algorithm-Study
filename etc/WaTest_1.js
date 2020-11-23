/**
문제 설명
당신은 대학생으로, 졸업 직전 각 과목별로 받은 성적을 정리해두었습니다. 당신은 수강한 과목들의 고유 가중치와 성적 가중치의 곱을 모두 합한 값이 일정 기준 이상인지 아닌지를 알고자 합니다.

먼저, 가능한 성적의 목록은 다음과 같습니다.

성적	성적 가중치
A+	10
A0	9
B+	8
B0	7
C+	6
C0	5
D+	4
D0	3
F	0
또한, 각 과목에는 고유 가중치가 붙어있습니다. 만약 어떤 과목이 3만큼의 고유 가중치를 가지고, 당신이 이 과목에서 B0를 받았다면, 당신은 21만큼의 점수를 얻게 됩니다.

과목별 당신의 성적을 의미하는 문자열 배열 grades, 과목별 고유 가중치를 의미하는 정수 배열 weights, 그리고 졸업 기준 threshold가 매개변수로 주어집니다. 당신이 얻은 점수의 합에서 threshold를 뺀 값을 return 하도록 solution 함수를 완성해주세요.

제한사항
grades의 길이는 1 이상 1,000 이하입니다.
grades의 모든 문자열은 A+, A0, B+, B0, C+, C0, D+, D0, F 중 하나입니다.
grades[i]는 i+1번째 과목의 성적을 의미합니다.
weights의 길이는 grades의 길이와 같습니다.
weights의 모든 수는 1 이상 1,000 이하입니다.
weights[i]는 i+1번째 과목의 고유 가중치를 의미합니다.
threshold는 1 이상 20,000,000 이하입니다.
입출력 예
grades	weights	threshold	result
["A+","D+","F","C0"]	[2,5,10,3]	50	5
["B+","A0","C+"]	[6,7,8]	200	-41
입출력 예 설명
입출력 예 #1

점수를 계산하는 과정은 다음과 같습니다.
과목 번호	성적	학점	점수
1번	A+ (10)	2	20
2번	D+ (4)	5	20
3번	F (0)	10	0
4번	C0 (5)	3	15
따라서, 총 점수는 55이므로, 여기서 threshold(=50)을 뺀 5를 return 해야 합니다.
입출력 예 #2

점수를 계산하는 과정은 다음과 같습니다.
과목 번호	성적	학점	점수
1번	B+ (8)	6	48
2번	A0 (9)	7	63
3번	C+ (6)	8	48
따라서, 총 점수는 159이므로, 여기서 threshold(=200)을 뺀 -41을 return 해야 합니다.
 */

function solution(grades, weights, threshold) {
    let answer = 0;
    let sum = 0;
    
    for(let i = 0; i < grades.length; i++) {
        if(grades[i] === 'A+') grades[i] = 10;
        else if(grades[i] === 'A0') grades[i] = 9;
        else if(grades[i] === 'B+') grades[i] = 8;
        else if(grades[i] === 'B0') grades[i] = 7;
        else if(grades[i] === 'C+') grades[i] = 6;
        else if(grades[i] === 'C0') grades[i] = 5;
        else if(grades[i] === 'D+') grades[i] = 4;
        else if(grades[i] === 'D0') grades[i] = 3;
        else if(grades[i] === 'F') grades[i] = 0;
        
        sum += grades[i] * weights[i];
    }
    
    answer = sum - threshold;
    
    return answer;
}