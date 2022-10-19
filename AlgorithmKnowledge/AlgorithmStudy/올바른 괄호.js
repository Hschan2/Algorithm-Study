// 올바른 괄호 (Valid Parentheses) - 괄호가 올바르게 Paired 된 것은 "(", "{", "[" 등의 괄호가 열렸으면 반드시 짝 지어서 ")", "}", "]"가 닫혀야 한다.
// 예. "()()" 혹은 "(())()" 올바른 괄호 O
// 예. "{}{}{" 혹은 "{{}" 올바른 괄호 X
// 예. "[{])" 올바른 괄호 X

/**
 * 유사코드

fn isValid(expression):
    -> create Stack
    -> scan expression item by item:
        -> IF "{" or "[" or "(":
            -> push to stack
        -> ELSE:
            -> pop():
                IF matching NOT found
                    -> return false

-> return length of stack
*/

function validParentheses(input) {
    const stack = []; // 괄호 담을 곳

    for (const char of input) {
        if (char === "{" || char === "[" || char === "(") {
            stack.push(char);
        } else {
            const lastChar = stack.pop(); // 마지막에 넣은 괄호 꺼내기

            // {, [, ( 이 아닐 때의 경우니까 char가 }, ], ) 중 하나가 될 것이고 lastChar가 {, [, ( 중 하나가 된다. 그래서 {}, [], ()이 되는지 확인하는 것
            if (char === "}" && lastChar !== "{" || char === "]" && lastChar !== "[" || char === ")" && lastChar !== "(") {
                return false;
            }
        }
    }

    return stack.length === 0; // stack이 완전히 비워있으면. 즉, 괄호가 모두 맞으면 true 아니면 false
}

console.log(validParentheses("[(})]")); // false
console.log(validParentheses("{([])}")); // true
console.log(validParentheses("())")); // false