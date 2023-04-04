// 생성자 함수는 많은 인원이나 물건의 목록 작성에 유용한 것 같다


function Checkweight(_name, _height, _weight) {
    this.name = _name;
    this.height = _height;
    this.weight = _weight;
    this.minWeight;
    this.maxWeight;
    this.getInfo = () => {
        let str = ''
            str+= '이름 : ' + this.name + ',';
            str+= '키 : ' + this.height + ',';
            str+= '몸무게 : ' + this.weight + '<br>';
        return str;
    }
    this.getResult = () => {
        this.minWeight = (this.height - 100) * 0.9 - 5;
        this.maxWeight = (this.height - 100) * 0.9 + 5;

        if (this.weight >= this.minWeight && this.weight <= this.maxWeight) {
            return '정상 몸무게입니다.';
        } else if(this.weight < this.minWeight){
            return '몸무게 미달입니다.';
        } else {
            return '몸무게 초과입니다.';
        }
    }
}

let jeong = new Checkweight('정원철', 174, 74);
let lee = new Checkweight('이민호', 158, 67);
console.log(jeong);
console.log(lee);

document.write(jeong.getInfo());
document.write(jeong.getResult());
'<br>'
document.write(lee.getInfo());
document.write(lee.getResult());



function Person(name) {
    this.name = name;
}

Person.prototype.callName = function () {
    return this.name;
}



let person11 = new Person('woncheol');
let person22 = new Person('Wow');
console.log(person11);
console.log(person22);

function Userinfo(name,age,address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

Userinfo.prototype.info = function () {
    return `${this.name}의 나이는 ${this.age}살이며, ${this.address}에 살고 있습니다.`
}

let user = new Userinfo('윤나나', 26, '서울');
console.log(user.info());