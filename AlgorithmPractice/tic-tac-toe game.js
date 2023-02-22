/**
tic-tac-toe는 두 명의 플레이어가 턴을 돌아가면서 1부터 9까지 포지션을 선택하는 게임 입니다. 선택된 포지션은 X나 0로 표시가 되며, 선택된 포지션은 다시 선택할 수가 없습니다. 게임 그리드는 3*3으로 다음과 같습니다.

        *              *                
 1      *      2       *      3       
        *              *                
        *              *               
 4      *      5       *      6       
        *              *               
        *              *               
 7      *      8       *      9      
        *              *
가로 세로 대각선으로 먼저 세 줄을 연속으로 만드는 플레이어가 우승하게 되며 무승부인 경우도 생깁니다. (매 턴마다 포지션을 입력해야 하지만, 출력은 게임이 끝이 났을 때만 하셔도 됩니다)

입력의 예:

Player 1 - please type a position (available position(s) are 1,2,3,4,5,6,7,8,9):

출력의 예:

        *              *                
 X      *      X       *      0       
        *              *                
        *              *               
 X      *      0       *      6       
        *              *               
        *              *               
 X      *      8       *      9      
        *              *
       
Win playear is: player 1
*/

let board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let marker = ['X', 'O']
let player = 1

function printBoard() {
    for (let i of board) {
        console.log('| ' + i.join(' | ') + ' |')
    }
    console.log('----------')
}

function checkWinner() {
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0]
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2]
    } else {
        for (let i = 0; i < 3; i++) {
            if (new Set([board[0][i]], board[1][i], board[2][i]).size == 1) {
                return board[0][i]
            } else if (new Set([board[i][0]], board[i][1], board[i][2]).size == 1) {
                return board[i][0]
            }
        }
    }
    if (new Set(board.flat()).size == 2) {
        return "Draw"
    }

    return false
}

function solution() {
    let userInput = window.prompt()
    let pos = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === userInput) {
                pos = [i, j]
            }
        }
    }
    if (pos.length === 2) {
        board[pos[0]][pos[1]] = marker[player]
    }

    let check = checkWinner()
    if (check) {
        if (check === "Draw") {
            console.log("무승부")
        } else {
            console.log(`${check} 승리`)
        }

        return false
    }

    return true
}

while (solution()) {
    player ^= 1 // 실행될 때마다 0과 1을 반복문이 종료될 때까지 교차
}