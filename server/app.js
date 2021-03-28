require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const db = require('./models');
const passportConfig = require('./passport');
const routes = require('./routes');

const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(
    cors({
      origin: 'Access-Control-Allow-Origin', // ★ 도메인 변경
      credentials: true,
    })
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true, // SSR시 쿠키 전달
    })
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === 'production' && 'lcoalhost:3065',
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use(routes);

app.listen(3065, () => {
  console.log('서버 실행 중!');
});
