/*
if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.

입력받은 숫자가 0보다 큰 경우 1을 출력
입력받은 숫자가 0보다 작은 경우 -1을 출력
입력받은 숫자가 0인 경우 0을 출력
*/

let a;

a = 0;

if (a > 0) {
    console.log(1);
} else if(a == 0){
    console.log(0);
} else {
    console.log(-1);
}

/*
프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.
사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요.
이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요.
틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
비밀번호 확인 절차는 다음과 같습니다.

맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
*/

let pw;
pw = 'TheMaste';

if(pw == 'TheMaster'){
    console.log('Welcome!');
} else if(pw == '' || pw == null ){
    console.log('Canceled!');
} else {
    console.log('Failed!');
}

/*
1. prompt함수로 문자열을 입력받아 "안녕"이 들어가면 "안녕하세요."를 반환하고 
"잘 자" 또는 "잘 자"를 입력하면 "안녕히 주무세요."를 반환하는 코드를 작성해라
*/

let hello;

hello = '잘자';

if (hello == '안녕') {
    console.log('안녕하세요');
} else if(hello == '잘자' || hello == '잘 자'){
    console.log('안녕히 주무세요');
} 


// 홈페이지에서의 풀이 방법

/*
let input=prompt("입력해주세요.");
 
if(input.indexOf("안녕")>=0) {
    alert("안녕하세요.");
} else if (input.indexOf("잘자")>=0 || input.indexOf("잘 자")>=0) {
    alert("안녕히 주무세요.");
}
*/

// 2. 문자열을 입력받아 "안녕"이라는 글자가 들어있지 않으면 "인사를 안하다니.."라고 반환하는 코드를 작성하라

let nohello;

nohello = '만나서 반가워!';

if (nohello.includes('안녕') ) {
    console.log('반갑다!');
} else {
    console.log('인사를 안하다니...');
}


// 3. 숫자를 입력받아 4로 나눌 수 있는 숫자라면 "4로 나눌 수 있는 숫자입니다."를 
// 이외에는 4로 나눌 수 없는 숫자입니다."를 반환하는 코드를 작성하라

let num;

num = 6;

if (num%4 == 0) {
    console.log('4로 나눌 수 있는 숫자입니다.');
} else {
    console.log('4로 나눌 수 없는 숫자입니다.');
}

// 홈페이지 답

/*
let times=Number(prompt("4로 나눠지는 숫자를 입력하시오."));
    
if(times %4 === 0 && times !== 0){
    alert("4로 나눌 수 있는 숫자입니다.");
} else{
    alert("4로 나눌 수 없는 숫자입니다.");
}
*/



