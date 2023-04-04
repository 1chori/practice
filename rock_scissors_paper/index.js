let gameContainer = document.querySelector('.container')
let userChoice = document.querySelector('.userChoice img')
let pcChoice = document.querySelector('.pcChoice img')
let options = document.querySelectorAll('.optionImg')
let result = document.querySelector('.result')

options.forEach((image, index) => {  // forEach 메서드는 매개변수와 함께 배열의 각 요소에 적용하게 될 콜백 함수를 전달
    image.addEventListener('click', (e) => {
        image.classList.add('active'); // click을 했을 때, 각 옵션 이미지의 클래스에 active가 추가된다.

        // 시작하고 결과 나오기 전 action
        userChoice.src = pcChoice.src = './rock.png';
        result.innerHTML = 'Wait..';

        options.forEach((image2, index2) => {   // forEach 메서드는 매개변수와 함께 배열의 각 요소에 적용하게 될 콜백 함수를 전달
            index !== index2 && image2.classList.remove('active');
        });  // image2로 표시되는 배열의 각 요소에 대해 index와 index2가 같지 않으면 image2 요소에서 active class를 제거한다

        gameContainer.classList.add('start');
        
        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove('start');
            let imageSrc = image.querySelector("img").src;
            userChoice.src = imageSrc;
            // 하나의 html 요소에서 이미지 소스를 복사하여 다른 요소에 붙여넣는 것이다

            let randomNumber = parseInt(Math.random()*3);
            let pcImages = ['rock.png', 'scissors.png', 'paper.png'];
            pcChoice.src = pcImages[randomNumber];
            
            let cpuValue = ['R','S','P'][randomNumber];
            let userValue = ['R','S','P'][index];
            
            let outcomes = {
                RR : 'Draw',
                RS : 'User',
                RP : 'Cpu',
                SR : 'Cpu',
                SS : 'Draw',
                SP : 'User',
                PR : 'User',
                PS : 'Cpu',
                PP : 'Draw',
            };
            let outcomeValue = outcomes[userValue + cpuValue];
        
            //  Display the result
            result.innerHTML = userValue === cpuValue ? 'Draw' : `${outcomeValue} Win`;
        }, 2500);

    });
})