// 그리워하는 사람의 이름 name 배열, 사람별 그리움 점수 yearning 배열, 각 사진에 찍힌 인물 photo 배열을 사용해 추억 점수 구하기
function solution(name, yearning, photo) {
    const result = [];

    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        for (let j = 0; j < photo[i].length; j++) {
            for (let k = 0; k < name.length; k++) {
                if (name[k] === photo[i][j]) {
                    sum += yearning[k];
                }
            }
        }
        result.push(sum);
    }

    return result;
}

/**
 * 위의 첫 번째 해결 코드는 중첩 for 문이 많아서 문제
 * 조금 더 개선된 버전이 필요
 * → 각 name 별yearning 점수를 Object로 저장해야겠다!
 */

function solution(name, yearning, photo) {
    const result = [];
    const eachInfo = {};

    name.forEach((name, index) => {
        eachInfo[name] = yearning[index];
    })

    for (let i = 0; i < photo.length; i++) {
        let sum = 0;

        for (let j = 0; j < photo[i].length; j++) {
            if (eachInfo[photo[i][j]]) {
                sum += eachInfo[photo[i][j]];
            }
        }

        result.push(sum);
    }

    return result;
}

/**
 * 위의 두 번째 해결 코드
 * 세 개의 중첩된 for 문을 두 개로 개선하였고, name 별 yearning 점수를 Object로 저장해 더 쉽게 계산
 * 그러나, 그래도 아직 조금 복잡하고 개선을 바람
 * → 위 코드 기반으로 ChatGPT에 물어보자!
 */

function solution(name, yearning, photo) {
    const eachInfo = name.reduce((obj, name, index) => {
        obj[name] = yearning[index];
        return obj;
    }, {});

    const result = photo.map(subArray =>
        subArray.reduce((sum, name) => sum + (eachInfo[name] || 0), 0)
    );

    return result;
}

/**
 * 위의 ChatGPT가 알려준 코드
 * reduce를 활용해 각 name마다 yearning의 점수를 Object로 변수 하나로 저장
 * photo를 반복하여 각 배열마다 이름들을 eachInfo에 넣어 해당 이름이 있으면 그에 맞는 점수를 더하도록 반복
 * 같은 기능을 하는 코드를 reduce, map으로 쉽게 해결하는 코드를 보고 for 문으로 해결하려는 생각을 전환할 수 있었고 많이 배움
 */