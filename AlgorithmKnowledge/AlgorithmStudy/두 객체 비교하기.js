// 두 객체 비교하기
// 접근 방법 - JSON.stringify()

const obj1 = {
    a: "a",
    b: 1,
    c: ["a", "b", "c"],
    d: {
        e: null,
        f: -1
    }
}

const obj2 = {
    a: "a",
    b: 1,
    c: ["a", "b", "c"],
    d: {
        f: -1,
        e: null
    }
}

// 1. JSON.stringify()
function isEqual(objA, objB) {
    let a = JSON.stringify(objA);
    let b = JSON.stringify(objB);

    // 값은 같아도 순서가 다를 수 있으니 분리 후 정렬하고 다시 합친 후 비교
    return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(isEqual(obj1, obj2)); // true

// 2. Object.keys()
function isEqual2(objA, objB) {
    // objA, objB가 존재하고 둘 다 object 타입인지 체크
    const checkObjects = (objA && objB && typeof objA === 'object' && typeof objB === 'object');

    // checkObjects가 존재하고 objA와 objB의 key 값들의 갯수가 같을 때
    if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
        // 각 key의 Object 값들을 하나씩 비교. 맞으면 true
        return Object.keys(objA).reduce((equal, key) => {
            return equal && isEqual2(objA[key], objB[key]);
        }, true);
    } else { // 위의 조건들을 부합하지 않을 때
        return objA === objB;
    }
}

console.log(isEqual2(obj1, obj2)); // true