function test(a) {
    console.log('1번');
    console.log('2번');
    a();
}

function test2() {
    console.log('나는 콜백함수');
}

test(test2);

console.log('----------------------------------------------------------');

let arr = [1,2,3,4];
arr.map(function(i,v,g) {
    console.log(i);
    console.log(v);
    console.log(g);
})
// i,v,g 순으로 출력이 된다

let arr2 = {
    map : function(callback) {
        if (callback.length === 1) {
            let a = 2;
            console.log('나는 map 함수. 매개변수가 1개로 알고 있어.'+a+'결과야')
            callback(a);
        } else if(callback.length === 2){
            let a = 2;
            let b = 3;
            console.log('나는 map 함수. 내가 받은 콜백함수에는 매개변수가 2개야')
            callback(a,b);
        }
    }
}

arr2.map(function(a,b) {
    console.log('나는 콜백함수. 전달받은 매개변수는'+a+b+'이거야');
})

function temp(callback) {
    if (callback.length === 0) {
        callback();
    } else if(callback.length === 1){
        let temp = '사과';
        callback(temp);
    } else if(callback.length === 2){
        let temp = '포도';
        let temp2 = '수박';
        callback(temp,temp2);
    } else {

    }
}

function temp2(v) {
    console.log('내가 좋아하는 과일은'+v+'야');
}

temp(temp2);

// 구구단

let obj = {
    gogodan : function (callback) {
        switch (callback.length) {
            case 1:
                callback(2);
                break;
            case 2:
                callback(2);
                callback(3);
                break;
            case 3:
                callback(2);
                callback(3);
                callback(4);
                break;
        
            default:
                console.log('그만해')
                break;
        }
    }
}

function aaa(f,g,h){
    for (let i = 1; i < 10; i++) {
        console.log(`${f} x ${i} = ${f * i}`);
    }
}

obj.gogodan(aaa);

console.log('-----------------------------------------------------------------')


function im(callback){
    callback();
}

function callback() {
    console.log('나는 누구냐?');
}

im(callback);

function foo() {
    console.log('foo');
}
function bar() {
    console.log('bar');
}
function baz() {
    foo();
    console.log('baz');
    bar();
}
baz();


console.log('------------------------------화살표 함수---------------------------------');

// let double = function(n) {
//     return n*2
// }

// console.log(double(3));

let double = n => n*2
console.log(double(3));

let x = 10;
function outer() {
    let y = 10;
    function inner() {
        let z = 10;
    }
    inner();
}
outer();

let sum = function(a,b) {
    return a+b;
}

