import styled from "styled-components";


const CardsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
  max-width: 80%;
  width: 80%;
`;
const Button = styled.button`
    display: inline-block;
    color: #16407a;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid #16407a;
    border-radius: 3px;
    display: block;
    text-transform: uppercase;
    cursor: pointer;
`;



export { CardsGroup, Button };
