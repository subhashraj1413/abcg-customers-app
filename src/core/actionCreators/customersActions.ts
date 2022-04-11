

/**
 * Actions Types for get customers list
 */
 export const GET_CUSTOMERS_REQUEST = 'GET_CUSTOMERS_REQUEST';
 export const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';
 export const GET_CUSTOMERS_FAILURE = 'GET_CUSTOMERS_FAILURE';

 
export const fetchCustomers = (payload: any) => ({
  type: GET_CUSTOMERS_REQUEST,
  payload,
});

export const fetchCustomersSuccess = (payload: any) => ({
  type: GET_CUSTOMERS_SUCCESS,
  payload,
});

export const fetchCustomersFailure = (payload: any) => ({
  type: GET_CUSTOMERS_FAILURE,
  payload,
});

/**
 * Actions Types for get customer info
 */
 export const GET_CUSTOMER_INFO_REQUEST = 'GET_CUSTOMER_INFO_REQUEST';
 export const GET_CUSTOMER_INFO_SUCCESS = 'GET_CUSTOMER_INFO_SUCCESS';
 export const GET_CUSTOMER_INFO_FAILURE = 'GET_CUSTOMER_INFO_FAILURE';
 
export const fetchCustomerInfo = (payload: any) => ({
  type: GET_CUSTOMER_INFO_REQUEST,
  payload,
});

export const fetchCustomerInfoSuccess = (payload: any) => ({
  type: GET_CUSTOMER_INFO_SUCCESS,
  payload,
});

export const fetchCustomerInfoFailure = (payload: any) => ({
  type: GET_CUSTOMER_INFO_FAILURE,
  payload,
});

