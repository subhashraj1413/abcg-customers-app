import {combineReducers} from 'redux';
import getBasicReducer from '../../utils/reducer';
import * as customersActions from '../actionCreators/customersActions';

const CustomersReducer = combineReducers({
  customers: getBasicReducer({
    request: customersActions.GET_CUSTOMERS_REQUEST,
    success: customersActions.GET_CUSTOMERS_SUCCESS,
    failure: customersActions.GET_CUSTOMERS_FAILURE,
  }),
  customerInfo: getBasicReducer({
    request: customersActions.GET_CUSTOMER_INFO_REQUEST,
    success: customersActions.GET_CUSTOMER_INFO_SUCCESS,
    failure: customersActions.GET_CUSTOMER_INFO_FAILURE,
  }),
});

export default CustomersReducer;
