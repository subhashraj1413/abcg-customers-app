import styled from "styled-components";

const Card = styled.div`
  margin: 1rem;
  padding: 1.25rem 1.5rem;
  padding-top: 1rem;
  width: calc(33.33333% - 2rem);
  border: 1px solid #f4f4f4;
  border-radius: 0rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

const CardImage = styled.img`
  width: 100%;
`;
const CardTitle = styled.h3`
  color: #444;
`;
const CardSubtitle = styled.small`
  display: inline-block;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  color: #999;
  text-transform: uppercase;
`;
const CardImageWrapper = styled.div`
  position: relative;
  height: 100%;
`;
const CardZoomIcon = styled.div`
    right: 0;
    top: 0px;
    position: absolute;
    width: 50px;
    background: #f6827a;
    height: 50px;
    padding: 10px;
    color: #fff;
    cursor: pointer;
`;
export { Card, CardImage, CardTitle, CardSubtitle, CardImageWrapper, CardZoomIcon };
