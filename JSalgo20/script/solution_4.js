/**
문제 설명
리얼스톤을 가진 빙키는 현실과 같은 허상을 만들어낼 수 있게 되었습니다. 빙키는 이 허상을 통해 바꿀 수 있는 미래를 보여주기로 했어요. 주도적으로, 주체적으로 사는 이들이 얼마나 많은 것을 이룰 수 있는지요.

본 것을 이룰 수 있는지는 리얼 스톤이 해줄 수 있는 일은 아니었지만, 적어도 절망이 뿌리 깊이 내린 위니브 월드 안에 한 줄기 빛이 될 수는 있을 겁니다.

['빙키는 10만큼 A를 훈련했다. 빙키는 날씨가 안 좋은데도 불구하고 20만큼 B를 했다. 빙키는 비가 내리는 가운데서도 10만큼 B를 훈련했다.', '빙키는 A를 30만큼 고민했다. 40만큼 B를 고민했다. 빙키는 A를 70만큼 참 오랜 시간 고민했다. 빙키는 놀랍게도 C를 10만큼 고민했다.']
첫 번째 문자열에서 숫자를 모두 추출합니다. A를 훈련한 수치는 10, B를 훈련한 수치는 30입니다. 두 번째 문자열에서도 숫자를 추출합니다. A를 고민한 수치는 100, B를 고민한 수치는 40입니다. C를 고민한 수치는 10입니다. 이 수치를 훈련수치 X 고민수치로 계산합니다. C는 훈련하지 않았기 때문에 사라집니다.

원래 미래 : A를 훈련한 수치와 A를 고민한 수치를 곱하면 1000이 나옵니다. B를 훈련한 수치와 B를 고민한 수치를 곱하면 1200이 나옵니다. 이를 더하면 원래 미래가 나옵니다.

바뀐 미래 : 가장 많이 훈련한 수치에 100을 더합니다. 가장 많이 고민한 수치에 100을 더합니다. 따라서 B를 훈련한 수치는 130이 되고, A를 고민한 수치는 200이 됩니다. 최종적으로 A를 훈련한 수치는 10, A를 고민한 수치는 200이 되므로 2000 값이 되고, B를 훈련한 수치는 130에 B를 고민한 수치 40을 곱하여 5200이 됩니다.

결괏값은 아래와 같이 출력됩니다.

'최종 꿈의 설계는 원래 미래 2200, 바뀐 미래 7200입니다. 이 수치대로 Vision을 만듭니다.'
제한 사항
입력 배열의 길이는 2입니다. [훈련수치, 고민수치]의 형태로 문자열이 입력됩니다.
수치 문자열은 항상 마침표 단위로 문장이 나뉩니다. 나누어진 문장을 나뉜 문장이라고 했을 때 나뉜 문장에는 항상 유일한 수치와 유일한 알파벳이 있습니다.
매칭되는 고민 수치와 훈련 수치가 없을 경우에는 ‘미래가 보이지 않습니다.’라고 출력해야 합니다.
1 ≤ 나뉜 문장 ≤ 10
1 ≤ 수치 ≤ 1000
A ≤ 알파벳 ≤ z
입출력 예
입력	출력
['100만큼 A를 훈련. 201 B. 120보다 이십만큼 더 B를 훈련했다.', '30만큼 A를 고민했다. 40만큼 B를 고민. 빙키는 A를 70만큼. C 10. D 10. A 10. z 10.']	'최종 꿈의 설계는 원래 미래 23840, 바뀐 미래 37840입니다. 이 수치대로 Vision을 만듭니다.'
입출력 설명
훈련수치는 A는 100, B는 321입니다. B를 더 많이 훈련하였으므로 B에 100을 더해 421이 됩니다.
고민수치는 A는 110, B는 40입니다. 나머지는 훈련수치와 짝이 맞는 것이 없으므로 무시됩니다. A를 더 많이 고민했으므로 A에 100을 더하여 210이 됩니다.
(100 * 110) + (321 * 40)을 연산하여 원래 미래는 23840 값이 나옵니다.
(100 * 210) + (421 * 40)을 연산하여 바뀐 미래는 37840 값이 나옵니다.
이 결과를 바탕으로 '최종 꿈의 설계는 원래 미래 23840, 바뀐 미래 37840입니다. 이 수치대로 Vision을 만듭니다.'라는 텍스트를 만듭니다. 콤마는 찍지 않습니다.
 */

function solution(data) {
    const trainings = [];
    const worries = [];

    for (const sentence of data) {
        const numbers = sentence.match(/\d+/g);
        const alphabets = sentence.match(/[a-zA-Z]/g);

        if (numbers && alphabets) {
            const trainingIndex = alphabets.findIndex((char) => char.toUpperCase() === 'A');
            const worryIndex = alphabets.findIndex((char) => char.toUpperCase() === 'B');

            if (trainingIndex !== -1 && worryIndex !== -1) {
                const training = parseInt(numbers[trainingIndex]);
                const worry = parseInt(numbers[worryIndex]);
                trainings.push(training);
                worries.push(worry);
            }
        }
    }

    if (trainings.length === 0 || worries.length === 0) {
        return '미래가 보이지 않습니다.';
    }

    const originalFuture = trainings.reduce((sum, training) => sum + training, 0) * worries.reduce((sum, worry) => sum + worry, 0);

    const maxTraining = Math.max(...trainings) + 100;
    const maxWorry = Math.max(...worries) + 100;
    const changedFuture = maxTraining * maxWorry;

    return `최종 꿈의 설계는 원래 미래 ${originalFuture}, 바뀐 미래 ${changedFuture}입니다. 이 수치대로 Vision을 만듭니다.`;
}

const input = [
    '100만큼 A를 훈련. 201 B. 120보다 이십만큼 더 B를 훈련했다.',
    '30만큼 A를 고민했다. 40만큼 B를 고민. 빙키는 A를 70만큼. C 10. D 10. A 10. z 10.',
];

console.log(solution(input));