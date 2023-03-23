let div2 = document.getElementById('div1');
let div3 = div1;
let div4 = document.querySelector('#div1');

console.log(div2);
console.log(div3);
console.log(div4);

let div5 = document.querySelector('.class_div2');
console.log(div5);

let divArr = document.querySelectorAll('.class_div2');
console.log(divArr[3]);

let div6 = document.querySelector('div');
console.log(div6);

let swap = document.querySelector('div').innerHTML = '넌 태그가 아냐';
console.log(swap);