import * as actionTypes from './actionTypes';
import zhMessages from '../../i18n/zh';
import enMessages from '../../i18n/en';
const initialState = {
  locale: 'zh',
  messages: zhMessages
};
const mapLang = lang => {
  switch (lang) {
    case 'zh':
      return { locale: lang, messages: zhMessages };
    case 'en':
      return { locale: lang, messages: enMessages };
    default:
      return { locale: lang, messages: zhMessages };
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANG: {
      return { ...mapLang(action.lang) };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
