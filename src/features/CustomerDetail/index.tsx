import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerInfo } from "../../core/actionCreators/customersActions";

import { Button } from "../../components/Common";
import {
  Card,
  CardImage,
  CardTitle,
  CardSubtitle
} from "../../components/CardItem/CardStyles";
import { useLocation, useNavigate } from "react-router-dom";

import { ArrowBack } from '@styled-icons/material'
import AppLoader from "../../components/AppLoader";

const CustomerDetail = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { state }: any = useLocation();
  const { customerId } = state

  useEffect(() => {
    if (customerId) {
      dispatch(fetchCustomerInfo({ customerId: customerId }));
    }
  }, [customerId]);

  const {
    loading = false,
    response: customerInfo = null,
  } = useSelector((state: any) => state.root.customerInfo);

  if (loading) {
    return <AppLoader />;
  }
  return (

    <>
      {!loading && customerInfo && (
        <Card>
          <CardImage src={customerInfo.picture || 'https://www.bootdey.com/img/Content/avatar/avatar1.png'} alt="vue" />
          <CardSubtitle>
            <span>{customerInfo.gender}</span>
          </CardSubtitle>
          <CardTitle>{customerInfo.full_name || "N/A"}</CardTitle>
          <CardTitle>{customerInfo.email || "N/A"}</CardTitle>
          <CardTitle>{customerInfo.address || "N/A"}</CardTitle>
          <CardTitle>{customerInfo.address || "N/A"}</CardTitle>
          <Button onClick={() => navigate("/")}><ArrowBack size="28" title="Go Back" />Go Back</Button>
        </Card>
      )}


    </>


  );
}

export default CustomerDetail;