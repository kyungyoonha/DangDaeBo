import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const useInput = (initalValue) => {
  const [inputs, setInputs] = useState(initalValue);
  const [errors, setErrors] = useState(initalValue);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const errorMessage = checkError(name, value, inputs);

      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      setInputs((prev) => ({ ...prev, [name]: value }));

      if (name === 'pw' && inputs.pwConfirm) {
        setErrors((prev) => ({
          ...prev,
          pwConfirm: inputs.pwConfirm !== value ? '비밀번호와 일치하지 않습니다.' : '',
        }));
      }
    },
    [inputs]
  );

  const validateAll = () => {
    let isValud = true;
    Object.keys(inputs).forEach((key) => {
      if (!inputs[key]) {
        setErrors((prev) => ({
          ...prev,
          [key]: '필수 입력값입니다.',
        }));
        isValud = false;
      }
    });
    return isValud;
  };

  return { inputs, setInputs, errors, setErrors, onChange, validateAll };
};

useInput.propTyes = {
  initalValue: PropTypes.object.isRequired,
};

export default useInput;

const checkError = (name, value, inputs) => {
  let regExp;
  let errorMessage = '';
  if (value.length === 0) return errorMessage;
  switch (name) {
    case 'name':
      regExp = /^[가-힣]{2,20}|[a-zA-Z]{2,20}$/;
      errorMessage = !value.match(regExp) ? '표준 한글, 영문 이름을 입력해 주세요. (2~20자)' : '';
      return errorMessage;

    case 'email':
      regExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      errorMessage = !value.match(regExp) ? '이메일 형식으로 입력해 주세요.' : '';
      return errorMessage;

    case 'pw':
      regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/;
      errorMessage = !value.match(regExp) ? '하나 이상 문자 및 하나 이상 숫자를 입력해주세요.(8~15자)' : '';
      return errorMessage;

    case 'pwConfirm':
      errorMessage = inputs.pw !== value ? '비밀번호와 일치하지 않습니다.' : '';
      return errorMessage;

    case 'phone':
      regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
      errorMessage = !value.match(regExp) ? '핸드폰 번호 형식에 맞게 입력해주세요.' : '';
      return errorMessage;
    default:
      return errorMessage;
  }
};
