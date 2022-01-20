import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from '../components/pages/identificate-page/store/reducer'
import brothersReducer from '../components/pages/bet-page/store/reducer'
import history from './history';
const rootReducer = combineReducers({
  router: connectRouter(history),
  user: userReducer,
  brothers: brothersReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
