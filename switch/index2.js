// 컴퓨터랑 가위바위보를 하자
// 10판을 해서 스코어를 계산하자
// 20000원으로 시작해서 최소 2000원 이상 판돈을 걸고 게임을 하자

let playerCom;
let playerMe;

let mySelect;
let comSelect;

let myMoney = 20000;
let minBetMoney = 2000;
let betMoney;

let comFirst = true;

let count = 0;
let maxCount = 10;

let game1 = true;  // 가위바위보
let game2 = true;  // 묵찌빠


// 베팅머니 설정
betMoney = parseInt(prompt('베팅 금액을 입력하세요.'));
while (maxCount === 0 && myMoney < 2000) {
    while (true) {
        if (2000 <= betMoney && betMoney <= myMoney) {
            alert('게임을 시작하겠습니다!');
            break;
        } else if(betMoney < 2000){
            betMoney = prompt(`최소 배팅금액은 ${minBetMoney}입니다.`);
        } else if(betMoney > myMoney){
            betMoney = prompt('현재 소지 금액보다 많이 입력하셨습니다.');
        } else if(isNaN(betMoney)){
            betMoney = prompt('숫자를 입력해주세요');
        }
    }


    // 가위바위보 설정
    //가위 : 0, 바위 : 1, 보 : 2
    playerCom = parseInt(Math.random() * 3);
    playerMe = prompt('가위,바위,보 중 하나를 입력하세요.')
    while (game1) {
        switch (playerMe) {
            case 0:
                mySelect = '가위';
                break;
            case 1:
                mySelect = '바위';
                break;
            case 2:
                mySelect = '보';
                break;
        }
    
        // 가위바위보 진행
        if (mySelect === comSelect) {
            prompt('비겼습니다. 다시 진행하겠습니다.')
        } else {
            switch (mySelect) {
                case '가위':
                    if (comSelect === '바위') {
                        prompt('유저 : 가위 | 컴퓨터 : 바위 \n 컴퓨터 공격!');
                        comFirst = 'true';
                    } else if(comSelect === '보'){
                        prompt('유저 : 가위 | 컴퓨터 : 보 \n 유저 공격!');
                        comFirst = 'false';
                    }
                    break;
                case '바위':
                    if (comSelect === '보') {
                        prompt('유저 : 바위 | 컴퓨터 : 보 \n 컴퓨터 공격!');
                        comFirst = 'true';
                    } else if(comSelect === '가위'){
                        prompt('유저 : 바위 | 컴퓨터 : 가위 \n 유저 공격!');
                        comFirst = 'false';
                    }
                    break;
                case '보':
                    if (comSelect === '가위') {
                        prompt('유저 : 보 | 컴퓨터 : 가위 \n 컴퓨터 공격!');
                        comFirst = 'true';
                    } else if(comSelect === '바위'){
                        prompt('유저 : 보 | 컴퓨터 : 바위 \n 유저 공격!');
                        comFirst = 'false';
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
}
