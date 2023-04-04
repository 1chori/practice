let _start;
let _index = 0;
let _swiper = document.querySelector('.swiper');
let _swiperList = document.querySelector('.swiper-list');
let {length} = document.querySelectorAll('.swiper-box');
let _prev = document.querySelector('.prev');
let _next = document.querySelector('.next');

let _swiperWidth = parseInt(getComputedStyle(_swiper).width);

_swiper.addEventListener('mousedown', (e) => {
    _start = e.clientX;
    console.log(_start);
})

_swiper.addEventListener('mouseup', (e) => {
    if (Math.abs(e.clientX - _start) > 200) {
        if (_start > e.clientX) {
            console.log('다음으로 넘어가자');
            console.log(_index)
            if (_index < (length -1)) 
                _index++;
            swiperMove();
        } else {
            console.log('이전으로 가자');
            if (_index > 0) 
                _index--;
                swiperMove();
        }
    }
})

function swiperMove() {
    _swiperList.style.left = -(_index * _swiperWidth) + 'px';
}

swiperMove();


_next.addEventListener('click', () => {
    if (_index < (length -1)) 
    _index++;
    
    swiperMove();
})

_prev.addEventListener('click', () => {
    if (_index > 0) 
    _index--;
    swiperMove();
})