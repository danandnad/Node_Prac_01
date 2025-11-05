// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");

//join
const fullPath = path.join(`some`, `work`, `ex.txt`);
console.log(fullPath);


//경로만 추출 - dirname
const dir = path.dirname(fullPath);
console.log(dir);


//파일이름만 추출 = basename
const fn1 = path.basename(__filename);
console.log(`전체 경로(__filename) : ${__filename}`); //전체경로 비교
//console.log(fn1);

//basename을 사용할때 또 한가지 방법(확장자를 제외할수있는 기능) 
const fn2 = path.basename(__filename, `.js`);
console.log(fn2);  //이러면 path.js가 아니라 path라고만 출력!