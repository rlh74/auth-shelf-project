import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// saga will be fired on ADD_ITEM action and axios post to server
function* addItem(action) {
  try {
    yield axios.post('/api/shelf', action.payload);
  } catch (error) {
    console.log('error with adding item:', error);
  }
}

function* addItemSaga() {
  yield takeLatest('ADD_ITEM', addItem);
}

export default addItemSaga;