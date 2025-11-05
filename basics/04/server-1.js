// HTTP 모듈로 서버 만들고 실행하기 (결과 비교 파일 : 04\results\server-1.js)

const http = require("http");

const server = http.createServer((req, res) => {
    console.log("요청발생");
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
});

//이렇게 하고 브라우저 주소창에 "localhost:3000"이라고 설정한 값
//3000을 작성하면 터미널에 요청발생이라고 뜸
