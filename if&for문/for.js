// 2. 1부터 100까지 더하는 코드를 만들어라

let sums = 0;

for(a = 1; a <= 2; a++){
    sums += a;
}
console.log(sums);

let arr1 = [1, 2, 3, 4, 5];

let result = arr1.reduce((acc, cur, idx) => {return acc += cur}, 0);
console.log(result);



// 1부터 100까지 곱하는 코드를 만들어라

let multi = 1

for(i = 1; i <= 100; i++){
    multi *= i;
}
console.log(multi);

let arr2 = [1,2,3,4,5,6];
let result2 = arr2.reduce((acc, cur, idx) => {return acc *= cur}, 1);
console.log(result2);


//  [52, 273, 103, 32, 57, 103, 31, 2]와 같은 숫자 배열이 주어질 때, 배열 내부에서 최대값과 최소값을 찾는 코드를 만들어라

let arr = [52, 273, 103, 32, 57, 103, 31, 2];
let Maxnum = [273];
let Minnum = [2];

for(k = 0; k < arr.length; k++){
    for(u = 0; u < Maxnum.length; u++){
        if(arr[k] == Maxnum[u]){
            console.log(Maxnum[u]);
        }
    }
}


let items = ['item1','item2','item3'];
let copy = [];

for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
}
console.log(copy);

// items.forEach(function(item) {
//     copy.push(item);
// })
// console.log(copy);

const arr3 = [10, 20, 30];
for (const item of arr3){
    console.log(item); // 10, 20, 30 출력
}