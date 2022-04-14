import styled from "styled-components";

const SearchWrapper = styled.div`
  margin: 2rem 0rem; 
  padding: 0.75rem 1.25rem;
  display: flex;
  width: 100%;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: 40%;
  padding: 0.75rem 1.25rem;
  border-radius: 1.5rem;
  border: 0;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  color: rgb(248, 248, 249);
  background: rgba(243, 99, 90, 0.8);
  &::placeholder {
    color: rgba(255, 255, 255, 0.32);
  }
  &:focus {
    outline: none;
  }
`;

export { SearchInput,  SearchWrapper};

