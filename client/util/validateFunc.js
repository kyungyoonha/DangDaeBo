const validateFunc = (ctg, value) => {
  let regExp;
  switch (ctg) {
    case 'name':
      regExp = /^[가-힣]{2,20}|[a-zA-Z]{2,20}$/;
      return value.length !== 0 && !value.match(regExp) && '표준 한글, 영문 이름을 입력해 주세요. (2~20자)';
    case 'email':
      regExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      return value.length !== 0 && !value.match(regExp) && '이메일 형식으로 입력해 주세요.';

    case 'phone':
      regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
      return value.length !== 0 && !value.match(regExp) && '핸드폰 번호 형식에 맞게 입력해주세요.';
    default:
      return false;
  }
};

export default validateFunc;
