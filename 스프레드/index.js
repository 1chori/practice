function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    return `Hello! My name is ${this.name}`;
}

let person = new Person('Charlie');

console.log(person.introduce());

console.log(person instanceof Person);