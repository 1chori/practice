// 내 이름 에니메이션

setTimeout(function () {
    document.querySelector('.strong-left').classList.add('animate');
    document.querySelector('.strong-right').classList.add('animate');
}, 1000);


// 스크롤 아래로 이동 시 요소들이 밑에서 위로 올라오는 애니메이션 동작 코드

// 뷰포트 위치에 따라 .reveal 클래스가 있는 요소에 active 클래스를 토글하는데 사용
// 뷰포트 : 웹 브라우저 상의 페이지 화면
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();
// 스크롤 할때마다 reveal 함수가 호출되어 페이지에 .reveal 클래스 요소가 많은 경우 성능 문제 발생할 수 있다.
// 함수 호출 빈도를 줄이기 위해 setTimeout 또는 requestAnimationFrame을 사용하여 스크롤 이벤트 디바운스 하자.


// 메뉴탭 클릭 시 해당 페이지로 스크롤 이동

let homeLink = document.querySelector('.title a[href="#home"]');
let aboutLink = document.querySelector('.line-ani a[href="#about-me-box"]');
let careerLink = document.querySelector('.line-ani2 a[href="#career-box"]');
let skillLink = document.querySelector('.line-ani3 a[href="#skill-box"]');
let contactLink = document.querySelector('.title-list a[href="#contact-me"]');

// Home page
homeLink.addEventListener('click', (event) => {
    event.preventDefault();

    let aboutSection = document.getElementById('home');
    let offsetTop = 0;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// About page
aboutLink.addEventListener('click', (event) => {
    event.preventDefault();

    let aboutSection = document.getElementById('about-me-box');
    let offsetTop = aboutSection.offsetTop + window.innerHeight;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Career page
careerLink.addEventListener('click', (event) => {
    event.preventDefault();

    let aboutSection = document.getElementById('career-box');
    let offsetTop = aboutSection.offsetTop + window.innerHeight;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Skill page
skillLink.addEventListener('click', (event) => {
    event.preventDefault();

    let aboutSection = document.getElementById('skill-box');
    let offsetTop = aboutSection.offsetTop + window.innerHeight;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});


// Contact me page
contactLink.addEventListener('click', (event) => {
    event.preventDefault();

    let aboutSection = document.getElementById('contact-me');
    let offsetTop = aboutSection.offsetTop + window.innerHeight;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});


// contact me 경고창 코드

let form = document.querySelector('.Client-info');
let nameField = form.querySelector('#name');
let emailField = form.querySelector('#email');
let messageField = form.querySelector('#message');
let submitButton = form.querySelector('.submit');

// submit 이벤트 전에 활성화 해야되니까 submit 바깥에 함수 입력


submitButton.addEventListener('click', (event) => {
    // Prevent the form from submitting to the server
    event.preventDefault();
    if (nameField.value === '' || emailField.value === '' || messageField.value === '') {
        alert('빈칸 채워!');
    } else if (/^\d+$/.test(nameField.value)) {
        alert('문자만 입력!');
        nameField.value = '';
    } else {
        alert('아직 못보내^^');
        // If all fields are filled in, you can submit the form to the server
        // using the form's "submit" method, like so:
        // form.submit();
    }
});

nameField.addEventListener('keydown', (event) => {
    // Get the pressed key's code
    let keyCode = event.keyCode || event.which;
    // Check if the key is a number (0-9)
    if (keyCode >= 48 && keyCode <= 57) {
        // If it's a number, prevent the default action (typing the number)
        event.preventDefault();
    }
});


// 아코디언 함수

let _project = document.querySelectorAll('.accordion a');
let _content = document.querySelectorAll('.accordion p');
console.log(_project);
console.log(_content);

_project.forEach((project, i) => {
    project.addEventListener('click', () => {
        if (getComputedStyle(_content[i]).display === 'none') {
            project.querySelector('.plus').innerHTML = '-';
            // _content[i].style.display = 'block';
        } else {
            project.querySelector('.plus').innerHTML = '+';
            //  _content[i].style.display = 'none';
        }

        if (_content[i].classList.contains('show')) {
            project.querySelector('.plus').innerHTML = '+';
            _content[i].classList.remove('show');
        } else {
            project.querySelector('.plus').innerHTML = '-';
            _content[i].classList.add('show');
        }
    });
});





