const passport = require('passport');
const { Strategy: LoaclStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(
    new LoaclStrategy(
      {
        usernameField: 'email',
        passwordField: 'pw',
      },
      async (email, pw, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { email: '존재하지 않는 이메일 입니다.' });
          }
          const result = await bcrypt.compare(pw, user.pw);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { pw: '비밀번호가 틀렸습니다.' });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
