// 순서대로 실행하기  
/*
function displayA() {
  console.log('A');
}
function displayB() {
  console.log('B');
}
function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();
*/


/*
//시간지연해서 부르는 방법 "setTimeout"
function displayA() {
  console.log('A');
}
function displayB() {
  setTimeout(() => {
    console.log(`B`);
  }, 2000);
  console.log('B');
}
function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();
*/




//원하는 순서에 맞게끔 출력하는 방법 "callback"
function displayA() {
  console.log('A');
}
function displayB(callback) {
  setTimeout(() => {
    console.log(`B`);
    callback();
  }, 2000);
  console.log('B');
}
function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();




//자바스크립트 비동기처리할때 사용하는 방법
//1. 콜백함수
//2. 프로미스
//3. async/await
//이렇게 세가지가 있다.