import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../core/actionCreators/customersActions";
import { Card } from "../../components/Card";

import styled from "styled-components";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import styles from "./Customers.module.css";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: "Baloo Paaji 2", cursive;
  padding: 20px 40px;
`;

export function Customers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers({}));
  }, []);

  const {
    loading = false,
    response: customers = null,
    error,
  } = useSelector((state: any) => state.root.customers);
  if (loading) {
    return null;
  }
  return (
    <div>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." />
            <div className={styles.search}></div>
          </div>
        </header>

        <CardContainer>
          {customers &&
            customers.map((customer: any, index: number) => {
              return (
                <Card
                  key={`${index}-${customer.customer_id}`}
                  title={customer.full_name}
                  date={1}
                  content={<>
                  <p>{customer.username}</p>
                  <p>{customer.gender}</p>
                  <p>{customer.email}</p>
                  </>}
                  imgUrl={
                    customer.picture
                      ? customer.picture
                      : "https://www.bootdey.com/img/Content/avatar/avatar2.png"
                  }
                />
              );
            })}
        </CardContainer>
      </div>
    </div>
  );
}
