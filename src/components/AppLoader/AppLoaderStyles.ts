import styled, { keyframes } from "styled-components";

const PageLoader = styled.div`
        position: fixed;
        display: block;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        overflow-x: hidden;
        background-color: rgba(31, 32, 41, 0.75);
        pointer-events: none;
        opacity: 1;
        transition: opacity 250ms 700ms ease;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppSpinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 4px solid #f3635a;
    border-right: 4px solid #174079;
    border-bottom: 4px solid #1e6b36;
    border-left: 4px solid #a59407;
    background: transparent;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export {  PageLoader, AppSpinner };