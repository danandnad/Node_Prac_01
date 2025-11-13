const mongoose = require("mongoose");
require("dotenv").config();

//async, await //데이터베이스 접속하는 코드
const dbConnect = async () =? {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB Connected");
  } catch(err) {
      console.log(err);
  }
}
module.exports = dbConnect;

//이렇게 하고 app.js파일에다가 const dbConnect = require("./config/dbConnect"); 를 입력까지 해줘야돼.
