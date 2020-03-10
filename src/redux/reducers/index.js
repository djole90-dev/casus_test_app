import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import documentsReducer from './documents-reducer'
import messagesReducer from './messages-reducer'

export default combineReducers({
  auth: authReducer,
  docs: documentsReducer,
  messages: messagesReducer
})