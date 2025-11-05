// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)
//웹브라우저창에 텍스트를 보여주는 코드

const http = require("http");

const server = http.createServer((req, res) => {
    //응답객체를 보여주는 코드는 res이다
    //지금 보여주려는 것이 텍스트파일이기에 setHeader 함수 사용
    res.setHeader("Content-type", "text/plain");
    //응답객체 write 사용해서
    res.write("Hello Node"); //창에 Hello Node 출력
    res.end(); //응답이 끝났다고 알려주는
});


server.listen(3000, () => {
    console.log("서버가 실행 중");
});