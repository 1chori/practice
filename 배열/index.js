const myMoney = 150;  // myMoney를 상수로 정의하고 그 값을 150으로 한다

//myMoney = 200;  // error

console.log('my asset is' + myMoney);  // 150 출력

//var myMoney = 200;  // error

//let myMoney = 200;  // error

if(myMoney === 150){
    let myMoney = 200;
    console.log('my asset is' + myMoney);  // 200 출력
}

console.log('my asset is' + myMoney);  // 150 출력

const my_object = {'key': 'asset'};
console.log(my_object);

// my_object = {'key': 'money'};
// console.log(my_object);  // error

// my_object 객체의 key 속성에 'your_key' 값을 할당한다.
my_object.key = 'your_key';
// my_object 객체를 콘솔에 출력한다.
console.log(my_object);


// 랜덤한 숫자를 생성하는 함수
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 추천할 음식 리스트
const foodList = ["피자", "치킨", "짜장면", "떡볶이", "초밥", "파스타", "샐러드", "햄버거", "김밥", "쌀국수"];

// 랜덤한 음식 추천 함수
function recommendFood() {
  const randomIndex = getRandomNumber(0, foodList.length - 1);
  return foodList[randomIndex];
}

// 추천 메시지 출력
console.log(`오늘 점심은 ${recommendFood()} 어떠세요?`);

// 1~45까지의 숫자 중 6개를 랜덤으로 뽑는 함수
function generateLottoNumbers() {
  const lottoNumbers = [];
  while (lottoNumbers.length < 6) {
    const number = Math.floor(Math.random() * 45) + 1;
    if (!lottoNumbers.includes(number)) {
      lottoNumbers.push(number);
    }
  }
  return lottoNumbers;
}

// 로또 번호를 출력하는 함수
function printLottoNumbers() {
  const lottoNumbers = generateLottoNumbers();
  console.log(`이번 주 로또 번호는 ${lottoNumbers.sort((a, b) => a - b)} 입니다.`);
}

// 실행
printLottoNumbers();