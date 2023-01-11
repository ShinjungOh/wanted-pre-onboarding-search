import React from 'react';
import { Layout } from './index';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Page = ({children}: Props) => (
  <Container>
    <Layout>
      {children}
    </Layout>
  </Container>
);

export default Page;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f6fa;
`;
