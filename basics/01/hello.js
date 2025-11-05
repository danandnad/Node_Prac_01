const c = require(`ansi-colors`);

function hello(name) {
  console.log(c.red(name) + " 님, 안녕하세요?");
}

hello("홍길동");


//ansi-colors npm 패키지 다운로드 후 실행결과까지 

//패키지 다운로드 npm i "패키지 이름"
//패키지 제거 node uninstall "패키지 이름"