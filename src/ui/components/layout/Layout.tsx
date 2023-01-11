import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <Container>
    {children}
  </Container>
);

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 462px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
