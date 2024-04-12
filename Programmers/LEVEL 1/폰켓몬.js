// 총 N 마리의 폰켓몬 중 N/2 마리의 결과 찾기
function solution(nums) {
    const pickKetmon = nums.length / 2;
    const ketmonSpecies = [];

    nums.forEach((number) => {
        if (!ketmonSpecies.includes(number)) {
            ketmonSpecies.push(number);
        }
    })

    return ketmonSpecies.length > pickKetmon ? pickKetmon : ketmonSpecies.length;
}

/**
 * 정답률 65%에서 어려움을 예상했지만, 생각보다 쉬운 문제
 * 위의 코드가 정답은 아니지만, 짧은 코드로 해결한 점은 만족
 */