import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import userReducer from './userReducer';

// next를 사용하면 컴포넌트 렌더링 전에 데이터를 불러올 수 있고 불러온 데이터는 HYDRATE로 들어온다.
// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
