// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)
/*
1.
const fs = require("fs");

fs.readFile("./example.txt", (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
});
//이렇게 코드를 짰을때는 출력값으론 알아볼수없는 바이너리값들이 나열
//이때는 "인코딩"이 안되어있어서 그럼



//2.
//인코딩값은 callback값 앞에다가 지정해주면된다.

const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
});
*/


//3.
//이것을 새로운 파일에 저장하려고 할때 writeFile사용해서
const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    }
    //console.log(data);
    fs.writeFile("./test.txt", data, (err) =>{
        if(err) {
            console.log(err);
        }
        console.log(`test.txt is saved .`);
    });
});