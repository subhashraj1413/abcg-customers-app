
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  ViewDetailsBtn
} from "./CardStyles";
import Tilt from "react-parallax-tilt";
import { CardType } from "../types";

export const Card = ({ title, date, imgUrl, content }: CardType) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{date} days ago</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {content}
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          
          <CardStats>
            <ViewDetailsBtn>View Details</ViewDetailsBtn>
          </CardStats>
         
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};
