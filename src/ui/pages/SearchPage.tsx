import React from 'react';
import styled from 'styled-components';
import search_icon from '../../lib/images/search_icon.svg';

const SearchPage = () => (
  <Container>
    <Title>
      국내 모든 임상시험 검색하고
      <br />
      온라인으로 참여하기
    </Title>
    <InputBox>
      <Input type='text' placeholder='🔍  질환명을 입력해 주세요.' />
      <Button>
        <img src={search_icon} width={20} height={20} color='#ffffff' alt="search_icon" />
      </Button>
    </InputBox>
  </Container>
);

export default SearchPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  box-sizing: border-box;
  width: 100%;
  height: 108px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InputBox = styled.div`
  width: 100%;
  max-width: 490px;
  height: 70px;
  border-radius: 42px;
  border: 2px solid #FFFFFF;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  position: relative;
  padding: 20px 10px 20px 24px;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  margin-right: 10px;
  padding-right: 25px;
  max-width: 490px;
  font-weight: 400;
  font-size: 18px;
  color: black;
  border: none;
  outline: none;

  ::placeholder {
    color: #a7afb7;
  }
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 0;
  background-color: #007BE9;
  color: #FFFFFF;
  cursor: pointer;
`;
