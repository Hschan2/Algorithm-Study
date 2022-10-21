// 배열 0(Zero) 옮기기

function moveZero(numbers) {
    let j = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            let temp = numbers[j]
            numbers[j] = numbers[i]
            numbers[i] = temp

            j++
        }
    }
}

const nums = [0, 1, 0, 3, 12]

console.log(moveZero(nums)) // 1, 3, 12, 0, 0