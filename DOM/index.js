document.querySelector('.add_class').innerHTML = '<div>Perfect</div>'

let _div = document.createElement('div');
console.log(_div);

_div.innerHTML = '<div>여기<p>있다!!</p></div>';

_div.classList.add('new_tag');

document.body.append(_div);
setTimeout(() => {
    document.querySelector('.add_class').append(_div);
}, 2000);

let _button = document.createElement('button');

_button.innerHTML = '눌러';

_button.onclick = function () {
    _div.remove();
    //document.body.removeChild(_div);
    //console.log(_div);
}

document.body.append(_button);

_button.addEventListener('click', function () {
    console.log('클릭 구독중');
})

_button.addEventListener('click',function () {
    console.log('나도 구독중');
})

window.onmousedown = function () {
    console.log('마우스 누름');
}

window.onmouseup = function () {
    console.log('마우스온')
}

window.onmousemove = function () {
    console.log('이동중..');
}
_div.onmousemove = function () {
    console.log('여기 이동중..');
}

let _box = document.querySelector('.box');

document.querySelector('.box').onmouseenter = function () {
    console.log('박스에서 이동');
}

_box.onmouseleave = function () {
    console.log('마우스 나갔어');
}

window.onclick = function (drag) {
    console.log(drag);
    console.log(drag.target);
}

_box.onclick = function (drag) {
    console.log(drag);
    console.log(drag.target);
}

let _button2 = document.querySelector('.btn');
_button2.onclick = function (e) {
    e.preventDefault();
}