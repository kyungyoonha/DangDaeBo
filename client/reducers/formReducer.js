export const FORM_SUBMIT_WRITER = 'FORM_SUBMIT_WRITER';
export const FORM_SUBMIT_BASIC = 'FORM_SUBMIT_BASIC';
export const FORM_SUBMIT_ADDITIONAL = 'FORM_SUBMIT_ADDITIONAL';

export const FORM_UPLOAD_REQUEST = 'FORM_UPLOAD_REQUEST';
export const FORM_UPLOAD_SUCCESS = 'FORM_UPLOAD_SUCCESS';
export const FORM_UPLOAD_FAILURE = 'FORM_UPLOAD_FAILURE';

const initialState = {
  writer: {},
  hero: {},
  imageArray: [],
  infoArray: [],
  uploadLoading: false,
  uploadError: null,
  uploadDone: false,
};

export const uploadImages = (e) => {
  const { files } = e.target;
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('image', files[i]);
  }
};

const formReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FORM_SUBMIT_WRITER:
        return {
          ...state,
          writer: {
            ...state.writer,
            ...action.payload,
          },
        };
      case FORM_SUBMIT_BASIC:
        return {
          ...state,
          hero: {
            ...state.hero,
            ...action.payload,
          },
        };
      case FORM_SUBMIT_ADDITIONAL:
        return {
          ...state,
          hero: {
            ...state.hero,
            ...action.payload,
          },
        };
      case FORM_UPLOAD_REQUEST:
        draft.signOutLoading = true;
        draft.signOutError = null;
        draft.signOutDone = false;
        return;

      default:
        break;
    }
  });

export default formReducer;
