function Orders(n, p, o) {
    let prod = [];
    let orders = [];
    let cost = 100;
    let success = 0;
    let fail = 0;
    let answer = 0;
    let result = 0;
    let reminder = 0;

    for(let i = 0; i < n; i++) {
        prod[i] = p[i];
        orders[i] = o[i];

        prod[i] += reminder;

        if(prod[i] > orders[i]) {
            answer += cost * orders[i];
            reminder = prod[i] - orders[i];
            cost = 100;
            success++;
            fail = 0;
        } else if(prod[i] === orders[i]) {
            answer += cost * orders[i];
            cost = 100;
            success++;
            fail = 0;
        } else if(prod[i] < orders[i]) {
            cost = cost / 2;
            reminder = prod[i];
            success++;
            fail++;

            if(fail === 4) break;
        }
    }

    result = answer / success;

    return result.toFixed(2).toString();
}

let production = [6, 2, 1, 4, 3, 2];
let order = [5, 4, 2, 3, 1, 4];

console.log(Orders(6, production, order));