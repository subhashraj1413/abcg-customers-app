import React from 'react'
import { Wrapper } from "./WrapperStyles";

interface MainWrapperProps {
  children: React.ReactNode,
  className?: string
}
const MainWrapper = ({ className, children }: MainWrapperProps) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

export default MainWrapper;