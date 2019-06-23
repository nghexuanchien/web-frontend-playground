import commonDataReducer from './common-data-reducer'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  commonData: commonDataReducer,
  form: formReducer //name of key must be "form"
})

export default rootReducer;