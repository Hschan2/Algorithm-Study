/**
자연수 뒤집어 배열로 만들기
문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
입출력 예
n	    return
12345	[5,4,3,2,1]
 */

function solution(n) {
    //     let answer = [];
    //     let toString = n.toString().split('');
        
    //     for(let i = toString.length - 1; i >= 0; i--) {
    //         answer.push(parseInt(toString[i]));
    //     }
        
    //     return answer;
    
        // 다른 풀이
        // .reverse()로 뒤집고 map()을 이용해 값을 새로 받는 것을 배울 수 있었다
        return n.toString().split('').reverse().map(i => i = Number(i));
    }