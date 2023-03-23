let player;
let computer;

let count = 0;  // 게임 횟수
let maxCount = 20;  

let myMoney = 20000;  // 자본금
let bettingMoney;



console.log(bettingMoney);


// while (condition) {
    

//     bettingMoney = prompt('베팅 금액을 입력하세요');

//     if (bettingMoney >= 2000 && bettingMoney <= 20000) {
//         bettingMoney = prompt(`베팅 금액 : ${bettingMoney} | 남은 금액 : ${myMoney - bettingMoney}\n맞나요?`);
//     } else if(bettingMoney < 2000){
//         bettingMoney = prompt(`배팅 금액이 너무 적습니다. 최소 배팅 금액은 2000원입니다.`);
//         continue;
//     } else if(bettingMoney > myMoney){
//         bettingMoney = parseInt(prompt(`배팅 금액이 현재 가지고 있는 금액보다 많습니다.\n 현재 금액 : ${myMoney}`));
//         continue;
//     } else if(isNaN(bettingMoney)){
//         bettingMoney = prompt(`금액을 숫자로 입력해 주세요.`);
//         continue;
//     }

//     player = prompt('컴퓨터와 가위바위보를 하겠습니다.\n가위, 바위, 보 중 하나를 입력하세요');
//     while (count < maxcount) {
//         switch (player) {
//             case '가위':
//                 playerSelect = 0;
           
//                 break;
//             case '바위':
//                 playerSelect = 1;
//                 break;
//             case '보':
//                 playerSelect = 2;
//                 break;
        
//             default:
//                 player = prompt('가위, 바위, 보 중에 입력해');
//                 break;
//         }
//         let computer = parseInt(Math.random() * 3);
//     }

//     // 묵찌빠 게임
// }