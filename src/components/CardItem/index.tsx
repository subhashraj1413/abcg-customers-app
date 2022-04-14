
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Common";
import Modal from "../Modal";
import { ZoomIn } from "@styled-icons/material";
import {
  Card,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardImageWrapper,
  CardZoomIcon
} from "./CardStyles";

const CardItem = ({ data, searchValue }: any) => {

  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState("");


  const matchItem = (value: any) => {
    const filteredData = data && data.filter((item: any) =>
      item.username.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData && Object.keys(filteredData).length > 0) {
      return filteredData.map((item: any, index: number) => (
        <Card key={index}>
          <CardImage onClick={() => {
            setShow(true)
            setModalImage(item.picture || 'https://www.bootdey.com/img/Content/avatar/avatar1.png')
          }} src={item.picture || 'https://www.bootdey.com/img/Content/avatar/avatar1.png'} alt="vue" />
          <CardSubtitle>
            <span>{item.gender}</span>
          </CardSubtitle>
          <CardTitle>{item.full_name}</CardTitle>

          <Button onClick={() => navigate("/customer-details", { state: { customerId: item.customer_id } })}>View Details</Button>
        </Card>
      ));
    }
  };

  const initItem = () =>
    data?.map((item: any, index: number) => (
      <Card key={index}>
        <CardImageWrapper>
          <CardImage src={item.picture || 'https://www.bootdey.com/img/Content/avatar/avatar1.png'} alt="vue" />
          <CardZoomIcon onClick={() => {
            setShow(true)
            setModalImage(item.picture || 'https://www.bootdey.com/img/Content/avatar/avatar1.png')
          }}>
            <ZoomIn size={"32px"} />
          </CardZoomIcon>

        </CardImageWrapper>
        <CardSubtitle>
          <span>{item.gender}</span>
        </CardSubtitle>
        <CardTitle>{item.full_name}</CardTitle>

        <Button onClick={() => navigate("/customer-details", { state: { customerId: item.customer_id } })}>View Details</Button>

      </Card>
    ));

  return <>

    {searchValue !== "" ? matchItem(searchValue) : initItem()}
    <Modal show={show} onClose={() => setShow(false)}>
      <div className="content">
        <img
          src={modalImage}
          alt="CustomerImage"

        />

      </div>
    </Modal>
  </>;
};

export default CardItem;
