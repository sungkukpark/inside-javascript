import {log} from './log.js';

// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    major: 'computer science'
};

log(foo);

// 객체 프로퍼티 읽기
log(foo.name); // 'foo'
log(foo['name']); // 'foo'
log(foo.major); // 'computer science'
log(foo['major']); // 'computer science'

// 객체 프로퍼티 갱신
foo.major = 'electrical engineering';
log(foo.major);     // .을 이용한 갱신 (using dot notation)
log(foo['major']);  // ['']을 이용한 갱신 (using bracket notation)

// 객체 프로퍼티 동적 생성
foo.age = 30; // .을 이용한 동적 생성
log(foo['age']);    // "age" 프로퍼티를 동적으로 생성
log(foo.age);

log(foo);

// 대괄호 표기법만을 사용해야 하는 경우
foo['full-name'] = 'foo bar'; // '-'를 포함한 프로퍼티 이름은 대괄호 표기법만 사용 가능
// foo.full-name = 'foo bar'; // '-'를 포함한 프로퍼티 이름은 대괄호 표기법만 사용 가능

console.log(foo.full - name);