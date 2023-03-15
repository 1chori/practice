// 로또 추첨 게임을 만들어보자

// 숫자의 총 갯수는 45개
// 추첨은 중복 없이 6개

let lottoNum = [];
let winNum = [];

// 1 ~ 45의 로또 번호를 만들자

function lottoInit() {
    lottoNum = [];  // 초기화 역할
    for (let i = 1; i < 46; i++) {
        lottoNum.push(i);
    }
    
    console.log(lottoNum);
}


// 45개의 숫자 중 6개를 뽑아보자

function lottoPlay() {
    winNum = [];
    for (let i = 0; i < 6; i++) {
        let rndInd = Math.floor(Math.random() * lottoNum.length);  // 0~44 랜덤 숫자를 뽑고 인덱스로 사용
        let number = lottoNum[rndInd];  
        lottoNum.splice(rndInd,1);  // 중복 숫자가 안나오기 위해 splice함수를 통해 나온 숫자들 제거
        winNum.push(number);  // 결과값을 담는다
    }
}    


function main() {
    lottoInit();
    lottoPlay();

    console.log(winNum);
}

main();
