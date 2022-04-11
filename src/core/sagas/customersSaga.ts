import axios from 'axios';
import {takeLatest, call, put} from 'redux-saga/effects';
import * as Actions from '../actionCreators/customersActions';

export function* watchCustomersSaga() {
  yield takeLatest(Actions.GET_CUSTOMERS_REQUEST, getCustomers);
}

export function* getCustomers(actions: any) {
  try {
    const response = yield call(getCustomersCall, actions);
    console.log('ssss')
    if (response) {
      yield put(Actions.fetchCustomersSuccess(response));
    } else {
      yield put(Actions.fetchCustomersFailure('Customer Not Found'));
    }
  } catch (error) {
    yield put(Actions.fetchCustomersFailure(error));
  }
}

export async function getCustomersCall(actions: any) {
  return await axios({
    method: 'get',
    url: 'https://abcg-bear-85.hasura.app/api/rest/customers',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-hasura-admin-secret':
        'FLpEdPkWbW91p7Un8ofrQkLKLqMf4IQ1ajggM7rhrLgW7MhouYMjEHdQ5lCSUVK6',
    },
    data: JSON.stringify(actions.payload),
  }).then(response => {
    return response.data.abcg_customers;
  });
}

