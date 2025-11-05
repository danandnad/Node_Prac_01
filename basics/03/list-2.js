// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)
//readdir은 현재 폴더에 있는 파일을 읽어오는 함수이다.
const fs = require("fs");

fs.readdir("./", (err, files) => {
    if(err) {
        console.log(err);
    }
    console.log(files);
});
//현재 경로에 있는 파일들이 모두 files라는 변수에 저장이 될거고
//저장된 값들이 출력값으로 나오게될것이다.