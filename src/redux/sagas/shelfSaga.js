import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchShelf(action){
  try{
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/shelf', config);
    console.log('response from server: ', response.data);
    yield put({type:'SET_SHELF', payload: response.data});
  }
  catch (error) {
    console.log('Error with fetchShelf Saga:', error);
  }
}

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
}
  
export default shelfSaga;