let objArr = [];

function create(name,age,sex,content,glass) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.content = content;
    this.glass = glass;
};

function render() {
    let text = '';
    objArr.forEach(function (i) {
        text += `<li> 이름 : ${i.name} 나이 : ${i.age} 성별 : ${i.sex} 내용 : ${i.content} 안경 착용 여부 : ${i.glass}`
    })
    console.log(text);
}