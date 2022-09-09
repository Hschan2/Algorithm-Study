/**
문제 설명
0과 1로 구성된 어떤 이진 문자열 penter, pexit, pescape가 있습니다. 당신은 단일 문자열로 구성된 청크 데이터 data를 패킷(Packet)으로 포장하고자 합니다. penter, pexit, pescape는 서로 길이가 같으며, data를 구성하는 모든 원소의 길이는 penter의 길이와 같습니다. 예를 들어, penter의 길이가 4라면 data는 길이가 4인 이진 원소들로 합쳐진 문자열입니다.

data를 패킷으로 포장한다는 것은, data 앞에 penter를, data 뒤에 pexit을 붙이는 것을 말합니다. 이때, data 내부에 있는 원소들 중 penter, pexit, pescape와 동일한 원소가 있다면 컴퓨터가 패킷을 잘못 해석할 수 있으므로, 그 원소 앞에 pescape를 삽입해줘야 합니다.

다음 그림은 penter, pexit, pescape, data가 주어졌을 때 data를 패킷으로 포장하는 예시를 나타낸 것입니다.

ex2.png

penter = 10, pexit = 11, pescape = 00 입니다.
data = 00011011 입니다.
data의 맨 앞에 penter가 삽입되었고, 맨 뒤에 pexit이 삽입되었습니다.
data에 들어있던 10, 11, 00 원소들은 각각 penter, pexit, pescape와 겹치므로, 해당하는 각 원소들 앞에 pescape가 삽입되었습니다.
data를 패킷으로 포장한 결과는 100000010010001111 이 됩니다.
문자열 penter, pexit, pescape, 그리고 data가 매개변수로 주어집니다. data를 패킷으로 포장한 결과를 return 하도록 solution 함수를 완성해주세요.

제한사항
penter, pexit, pescape, data는 모두 0과 1로 구성된 문자열입니다.
penter의 길이는 2 이상 100 이하입니다.
penter, pexit, pescape는 서로 다릅니다.
data의 길이는 1 이상 100,000 이하인 penter의 길이의 배수입니다.
입출력 예
penter	pexit	pescape	data	result
"1100"	"0010"	"1001"	"1101100100101111001111000000"	"110011011001100110010010111100111001110000000010"
"10"	"11"	"00"	"00011011"	"100000010010001111"
입출력 예 설명
입출력 예 #1

penter, pexit, pescape의 길이가 4이므로, data는 길이가 4인 원소로 구성되어 있습니다.
다음 그림은 data를 4개 비트 단위로 쪼갠 뒤 다시 합치는 과정을 나타낸 것입니다.
ex1.png

data에 들어있던 1100, 0010, 1001 원소들은 각각 penter, pexit, pescape와 겹치므로, 해당하는 각 원소들 앞에 pescape가 삽입되었습니다.
따라서, 110011011001100110010010111100111001110000000010을 return 해야 합니다.
입출력 예 #2

문제 예시와 같습니다.
 */

function solution(penter, pexit, pescape, data) {
    let answer = '';
    let totalLength = data.length / penter.length;
    let slices = [];
    let slice = '';
    
    for(let i = 0; i < data.length; i+=penter.length) {
        slice = data.slice(i, i + penter.length); 
        slices.push(slice);
    }
    
    for(let i = 0; i < slices.length; i++) {
        if(slices[i] === penter || slices[i] === pexit || slices[i] === pescape) {
            answer += pescape + slices[i];
        } else {
            answer += slices[i];
        }
    }
    
    answer = penter + answer + pexit;
    
    return answer;
}