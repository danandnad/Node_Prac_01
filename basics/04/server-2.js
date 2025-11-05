// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)

const http = require("http");

const server = http.createServer((req, res) => {
    //console.log("요청발생");
    console.log("req"); //이렇게 request에 어떤 정보가 들어있는지
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
});