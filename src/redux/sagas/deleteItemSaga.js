import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// saga will be fired on ADD_ITEM action and axios post to server
function* deleteItem(action) {
    // yield console.log('delte item saga:', action.payload)
  try {
    yield axios.delete('/api/shelf/' + action.payload);
    yield put({type: 'FETCH_SHELF'})
  } catch (error) {
    console.log('error deleting item:', error);
  }
}

function* deleteItemSaga() {
  yield takeLatest('REMOVE_ITEM', deleteItem);
}

export default deleteItemSaga;