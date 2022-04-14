import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../actionCreators/customersActions';

export function* watchCustomersSaga() {
  yield takeLatest(Actions.GET_CUSTOMERS_REQUEST, getCustomers);
  yield takeLatest(Actions.GET_CUSTOMER_INFO_REQUEST, getCustomerInfo);

}

export function* getCustomers(actions: any): any {
  try {
    const response = yield call(getCustomersCall, actions);
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

export function* getCustomerInfo(actions: any): any {
  try {
    console.log(actions)
    const response = yield call(getCustomerInfoCall, actions);
    
    if (response) {
      yield put(Actions.fetchCustomerInfoSuccess(response));
    } else {
      yield put(Actions.fetchCustomerInfoFailure('Customer Not Found'));
    }
  } catch (error) {
    yield put(Actions.fetchCustomerInfoFailure(error));
  }
}

export async function getCustomerInfoCall(actions: any) {
  const {payload : { customerId =  ""} } = actions
  return await axios({
    method: 'get',
    url: `https://abcg-bear-85.hasura.app/api/rest/customer/${customerId}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-hasura-admin-secret':
        'FLpEdPkWbW91p7Un8ofrQkLKLqMf4IQ1ajggM7rhrLgW7MhouYMjEHdQ5lCSUVK6',
    },
    data: JSON.stringify(actions.payload),
  }).then(response => {
    return response.data.abcg_customers[0];
  });
}
