import { takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGOUT_REQUEST, USER_NAME_REQUEST } from '../Actions/Types';
import { userName } from './commonSaga'
function* rootSagas() {
    yield takeEvery(USER_NAME_REQUEST, userName)
    // yield takeEvery(LOGIN_REQUEST, login);
    // yield takeEvery(LOGOUT_REQUEST, logout);
}

export default rootSagas;