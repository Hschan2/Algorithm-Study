const result = [[2,5], [3,7], [10,11]];
let DaySum = 0;

for(let i  = 0; i , result.length; i++) {
    if(result[i + 1][0] < result[i][0]) {
        result[i + 1][0] = result[i][0];
        DaySum += result[i][1] - result[i][0];
    } else {
        DaySum += result[i][1] - result[i][0];
    }
}


console.log(DaySum);