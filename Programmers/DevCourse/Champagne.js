/**
 * 가짜 샴페인을 확인하기
 * 주어진 진짜 샴페인을 목록들과 진짜 샴페인의 모조폼인 가짜 샴페인 목록들을 확인해 모조품일 경우 1, 아니면 0을 출력하라
 * 
 * 예.
 * ['A B C D E'] | ['E D C B A']
 * 결과. 1 => 'E D C B A'는 진짜 샴페인의 'A B C D E'의 모든 요소가 뒤집혀서 만들었기 때문에
 * 
 * ['A B C'] | ['A B C X']
 * 결과. 0 => A, B, C가 있지만 새로운 X가 추가되었기 때문에 가짜가 아닌 새로 만든 샴페인
 */

// 내가 작성한 예시 코드 (자세한 코드 작성 불가)
function solution(originals, fakes) {
    const result = [];

    for (let i = 0; i < fakes.length; i++) {
        // 진짜 샴페인인지, 가짜 샴페인인지 allTrue의 개수를 받아 판별
        const copyrightCount = allTrueCheck(originals, fakes[i]);

        // allTrue의 개수가 0보다 크면 가짜이기 때문에 1, 그게 아니면 가짜가 아니기 때문에 0
        if (copyrightCount > 1) result.push(1);
        else result.push(0);
    }

    return result;
}


function allTrueCheck(originals, fake) {
    let allTrue = 0;
    const a = fake.toLowerCase();
    const b = a.split(' ');

    for (let i = 0; i < originals.length; i++) {
        const c = originals[i].toLowerCase();
        const d = c.split(' ');
    }

    same = sameCheck(d, a); // 진짜 샴페인과 판별 샴페인 중 같은 요소있는지 체크
    notSame = notSameCheck(b, c); // 진짜 샴페인과 판별 샴페인 중 다른 요소있는지 체크

    // 다른 요소가 없고 같은 요소가 판별할 요소의 개수와 같으면 가짜 샴페인
    if (notSame === 0 && same === b.length) allTrue += 1;
    
    return allTrue;
}

function sameCheck(d, a) {
    let same = 0

    // 진짜 샴페인의 요소와 판별할 샴페인 요소들 중 같은 게 몇 개인지 체크
    for(let i = 0; i < d.length; i++) {
        if (a.includes(d[i])) same += 1
    }

    return same;
}


function notSameCheck(b, c) {
    let notSame = 0;

    // 진짜 샴페인에 있는 요소들과 판별할 샴페인의 요소에서 다른 게 있는지 체크
    for (let i = 0; i < b.length; i++) {
        if (!c.includes(b[i])) notSame += 1;
    }

    return notSame;
}
