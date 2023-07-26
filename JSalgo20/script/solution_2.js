/**
문제 설명
라이캣은 신비의 섬 제주에서 7개의 원석을 확보하게 됩니다. 라이캣은 7개의 원석을 동료들에게 나눠주고, 라이언을 치기 위해 각자의 마을로 돌아가 힘을 모을 것을 당부합니다.

절대 스톤을 부여받은 동료들은 각각의 마을로 향합니다. 동료들은 먼 마을에서 고양이 마을로 돌아간 라이캣과 암호로 된 편지를 주고받습니다. 여러 가지 암호문 중, 최종 혁명(revolution) 날짜 암호문은 월과 일로 해독할 수 있습니다. 다음 규칙에 따라 편지에서 혁명의 날짜를 알아내 출정 준비를 하세요.

편지 안에 내용은 문자열로 주어집니다.
문자열 중에 r, e, v 뒤에 나오는 값을 더하여 나온 최종 숫자에서 앞자리를 월로 뒷자리를 일로 판단합니다.
r, e, v 뒤에 나오는 숫자는 1부터 10까지입니다. 이를 넘어가는 숫자가 나올 경우 앞 숫자만 뽑아냅니다.
제한 사항
1 ≤ r, e, v 뒤의 숫자 ≤ 10
11 ≤ 합한 값 ≤ 99
입출력 예
입력	출력
'a10b9r1ce33uab8wc918v2cv11v9'	'1월 6일'
입출력 설명
패턴에 맞게 뽑아낸 값은 아래와 같습니다. e33은 e3으로 인식해서 3만 뽑아내야 합니다.

['r1', 'e3', 'v2', 'v1', 'v9']
이 숫자를 모두 더하면 16으로 앞자리가 월, 뒷자리가 일이 됩니다. 혁명의 날짜는 1월 6일입니다.
 */

function solution(data) {
    const getInfo = [];
    let fitCondition = '';

    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'r' || data[i] === 'e' || data[i] === 'v') {
            fitCondition = data[i] + data[i + 1];
            getInfo.push(fitCondition);
            fitCondition = '';
        }
    }

    const sum = getInfo.map((element) => parseInt(element.match(/\d+/)[0])).reduce((acc, curr) => acc + curr, 0);
    const digits = sum.toString().split('');

    return `${digits[0]}월 ${digits[1]}일`;
}

const input = 'a10b9r1ce33uab8wc918v2cv11v9';

console.log(solution(input));
