/**
문제 설명
라이캣도 혁명을 준비하기 위해 고향으로 내려왔습니다. 라이캣이 원석을 구하러 떠나기 전 설립했던 캣네 생선은 직원 수 20명에서 1만 명이 되었습니다.

라이캣은 돌아온 사실을 누구에게도 알리지 않고 도시를 돌아다녔습니다. (주)캣네생선을 중심으로 이룬 큰 경제 성장에도 여전히 그늘진 곳이 보였습니다. 여전히 없는 사람은 병원에 가지 못했고, 누군가는 구걸을 하고 있었으며, 없는 사람은 더욱더 많이 라이언 타운의 강제 노역에 끌려가야 했습니다. 고양이가 아무리 많다 하더라도, 결국 사자를 이길 수는 없었으니까요. 큰 경제 성장을 이룬 만큼 더욱 핍박받고, 약탈당했으며, 위협받았습니다.

라이캣은 라이언 타운의 강제 노역에 끌려갔다 돌아온 사람들이 모여있는 마을에 정착합니다. 그들은 성치 않은 마음과 정신으로 더 이상 무엇에도 도움이 안 되기에 누구도 신경 쓰지 않았고, 서로가 서로를 위로해 주며 마을을 이뤘습니다.

라이캣은 여기에 무료 샌드위치 급식소를 차렸습니다. 누구에게 시키지 않고 직접 포장 업무를 맡았습니다. 라이캣은 아침 일찍 일어나 재료를 준비했습니다. 다만 마을에서 구할 수 있는 것이 한계가 있어 주변 마을로부터 되는대로 재료를 준비했습니다. 재료가 준비되면 식빵 → 계란 → 베이컨 → 야채 → 식빵과 같은 조리 순서로 항상 순서에 맞게 샌드위치를 하나씩 정성스럽게 포장했습니다. 그가 가진 스톤이 빛을 발했습니다.

재료의 순서로 [식빵, 식빵, 계란, 베이컨, 야채, 식빵, 계란, 베이컨, 야채, 식빵] 이 들어온 경우
2번째부터 6번째까지의 재료로 샌드위치 한 개를 포장할 수 있습니다.
이제 1번째 재료와 7번째부터 10번째까지의 재료로 하나의 샌드위치를 포장할 수 있습니다.
그러므로, 총 2개의 샌드위치를 만들어 낼 수 있습니다. 순서가 바뀌면 샌드위치는 포장할 수 없습니다.
위의 예제와 같이 라이캣에게 전해지는 재료의 정보가 리스트로 주어졌을 때, 포장할 수 있는 샌드위치 개수를 출력하세요.

제한 사항
1 ≤ 재료의 길이 ≤ 1,000,000
재료의 종류는 다음과 같이 나타냅니다.

1 : 식빵
2 : 계란
3 : 베이컨
4 : 야채

정답은 오로지 하나만 존재합니다.

입출력 예
입력	출력
[1, 2, 3, 4, 1, 1, 2, 3, 4]	1
[1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1]	2
[1, 2, 3, 4, 2, 3, 4, 1]	0

입출력 설명
숫자로 된 리스트를 입력받습니다.
샌드위치의 순서는 항상 1, 2, 3, 4, 1을 지켜야 합니다.
재료는 순서를 바꿔 중간에서 빼내지 못합니다. 오로지 완성된 샌드위치만 입력 배열에서 빠질 수 있습니다.
리스트 내에서 샌드위치가 만들어질 수 있는 개수를 결괏값으로 출력합니다.
 */

// Stack, Queue 이용
function solution(data) {

}

const data = [1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1];

function correct(data) {
    let result = 0
    let stack = []

    for (let i of data) {
        stack.push(i)
        if (JSON.stringify(stack.slice(-5)) === JSON.stringify([1, 2, 3, 4, 1])) {
            [...new Array(5)].forEach(v => {
                stack.pop()
            })
            result += 1
        }
    }

    return result
}