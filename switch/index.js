const gender = '';
let msg = ''; 

switch(gender) {
    case '남성':
    case '남자': // 여기서 부터 시작
    case '남':
        msg = '당신의 성별은 남성입니다.'; // 동작 수행
        break; // switch문 종료
    case '여성':
    case '여자':
    case '여':
        msg = '당신의 성별은 여성입니다.';
        break;
    default:
        msg = '성별을 다시 한 번 확인해 주세요';
}

console.log(msg); // '당신의 성별은 남성입니다.'

// let place = '미국';
// let msg2;


// 첫 답변을 한뒤 "또 가고 싶은 곳 없어?"라고 다음 질문을 한다
// "없다"라고 말할 때까지 반복 질문


// let travel = true;

// place = prompt('일본, 미국, 유럽 중 가고 싶은 곳을 입력하세요');
// while (travel) {
//     switch (place) {
//         case '일본':
//             place = prompt('일본 좋지! 다른 곳은 없어?');
//             continue;

//         case '미국':
//             place = prompt('미국 좋지! 다른 곳은 없어?');
//             continue;

//         case '유럽':
//             place = prompt('유럽 좋지! 다른 곳은 없어?');
//             continue;

//         default:
//             place = prompt('일본, 미국, 유럽 중에서 골라');
//             continue;
            
//         case '없어':
//             break;
//     }
//     travel = false;
// }




// 컴퓨터랑 가위바위보를 하자
// 10판을 해서 스코어를 계산하자
// 20000원으로 시작해서 최소 2000원 이상 판돈을 걸고 게임을 하자

let game = true;
let player;

let playerSelect;
let comSeclet;

let maxcount = 5;
let count = 0;
let win = 0;
let lose = 0;

let myMoney = 20000;
let bettingMoney;


bettingMoney = prompt('베팅 금액을 입력하세요');

while(count < maxcount && myMoney >= 2000){
    // 베팅 머니 설정
    
    if (bettingMoney >= 2000 && bettingMoney <= 20000) {
        alert("게임을 진행할게요~")
    } else if(bettingMoney < 2000){
        bettingMoney = prompt(`배팅 금액이 너무 적습니다. 최소 배팅 금액은 2000원입니다.`);
        continue;
    } else if(bettingMoney > myMoney){
        bettingMoney = parseInt(prompt(`배팅 금액이 현재 가지고 있는 금액보다 많습니다.\n 현재 금액 : ${myMoney}`));
        continue;
    } else if(isNaN(bettingMoney)){
        bettingMoney = prompt(`금액을 숫자로 입력해 주세요.`);
        continue;
    }

    player = prompt('컴퓨터와 가위바위보를 하겠습니다.\n가위, 바위, 보 중 하나를 입력하세요');
    while (count < maxcount) {
        switch (player) {
            case '가위':
                playerSelect = 0;
           
                break;
            case '바위':
                playerSelect = 1;
                break;
            case '보':
                playerSelect = 2;
                break;
        
            default:
                player = prompt('가위, 바위, 보 중에 입력해');
                break;
        }
        let computer = parseInt(Math.random() * 3);
    
        if (player === '가위') {
            switch (computer) {
                case 0:
                    player = prompt('사용자 : 가위 | 컴퓨터 : 가위\n Draw. play again');
                    continue;
                case 1:
                    count++;
                    lose++;
                    player = prompt(`사용자 : 가위 | 컴퓨터 : 바위\nYou lose. play again.\nwin : ${win}, lose : ${lose} 남은 횟수 : ${maxcount - count}`);
                    continue;
                case 2:
                    count++;
                    win++;
                    player = prompt(`사용자 : 가위 | 컴퓨터 : 보\nYou win. play again.\nwin : ${win}, lose : ${lose} 남은 횟수 : ${maxcount - count}`);
                    continue;
            
                default:
                    player = prompt('가위, 바위, 보 중에 입력해');
                    break;
            }
        } else if(player === '바위'){
            switch (computer) {
                case 0:
                    count++;
                    win++;
                    player = prompt(`사용자 : 바위 | 컴퓨터 : 가위\nYou win. play again.\nwin : ${win}, lose : ${lose} 남은 횟수 : ${maxcount - count}`);
                    continue;
                case 1:
                    player = prompt('사용자 : 바위 | 컴퓨터 : 바위\n 비겼습니다. 다시 입력하세요.');
                    continue;
                case 2:
                    count++;
                    lose++;
                    player = prompt(`사용자 : 바위 | 컴퓨터 : 보\nYou lose. play again.\nwin : ${win}, lose : ${lose} 남은 횟수 : ${maxcount - count}`);
                    continue;
            
                default:
                    player = prompt('가위, 바위, 보 중에 입력해');
                    break;
            }
        } else if(player === '보'){
            switch (computer) {
                case 0:
                    count++;
                    lose++;
                    player = prompt(`사용자 : 보 | 컴퓨터 : 가위\nYou lose. play again.\nwin : ${win}, lose : ${lose} 남은 횟수 : ${maxcount - count}`);
                    continue;
                case 1:
                    count++;
                    win++;
                    player = prompt(`사용자 : 보 | 컴퓨터 : 바위\nYou win. play again.\nwin : ${win}, lose : ${lose} 남은 횟수 : ${maxcount - count}`);
                    continue;
                case 2:
                    player = prompt('사용자 : 보 | 컴퓨터 : 보\n 비겼습니다. 다시 입력하세요.');
                    continue;
            
                default:
                    player = prompt('가위, 바위, 보 중에 입력해');
                    break;
            }
        } 
    }
    if (count >= maxcount) {
        if (win >= lose) {
            alert("이겼어")
            myMoney = myMoney + bettingMoney;
        } else {
            alert("졌어")
            myMoney = myMoney - bettingMoney;
        }
        alert(bettingMoney)
        alert(`게임이 종료되었습니다. 최종 스코어는 win : ${win}, lose : ${lose}\n현재 소지 금액 : ${myMoney}`);
    }

    if (myMoney < 2000) {
        alert('가진 돈을 모두 소진하셨습니다. 충전해서 돌아오세요');
        break;
    }
}

// let sign;

// while (place === '없어') {
//     if (place === '일본') {
//         place = prompt('일본 좋지!\n또 가고 싶은 곳 없어?');
//     } else if (place === '미국') {
//         place = prompt('미국 좋지!\n또 가고 싶은 곳 없어?');
//     } else if (place === '유럽') {
//         place = prompt('유럽 좋지!\n또 가고 싶은 곳 없어?');
//     } else {
//         place = prompt('일본, 유럽, 미국 중에서 골라');
//     }
    
// }


// if(computer === 0){
//     player = prompt('사용자 : 가위 | 컴퓨터 : 가위\n 비겼습니다. 다시 입력하세요.');
//     continue;
// } else if(computer === 1){
//     player = prompt('사용자 : 가위 | 컴퓨터 : 바위\n 졌습니다. 다시 입력하세요.');
//     continue;
// } else if(computer === 2){
//     player = prompt('사용자 : 가위 | 컴퓨터 : 보\n 이겼습니다. 다시 입력하세요.');
//     continue;
// }