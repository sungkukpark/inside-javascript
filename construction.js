// // 1. Object()를 이용해서 foo 빈 객체를 생성
// var foo = new Object();
// // 이는 "var foo = {};"로 줄여쓸 수 있다.
//
// // foo 객체 프로퍼티 생성
// foo.name = 'foo';
// foo.age = 30;
// foo.gender = 'male';
//
// console.log(typeof foo);
// console.log(foo);
//

// // 2. 객체 리터럴 방식 이용
// var foo = {
//     name : 'foo',
//     age : 30,
//     gender : 'male'
// };
//
// console.log(typeof foo);
// console.log(foo);

// 3. 생성자 함수를 이용
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = new Person('foo', 30, 'male');

console.log(typeof foo);
console.log(foo);
