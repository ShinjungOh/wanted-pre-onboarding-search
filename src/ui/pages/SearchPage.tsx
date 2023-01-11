import React, { useState } from 'react';
import styled from 'styled-components';
import search_icon from '../../lib/images/search_icon.svg';
import { getSearchData } from '../../lib/apis/searchApi';

interface SickItemProps {
  sickCd: string;
  sickNm: string;
}

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [searchedKeywords, setSearchedKeywords] = useState<SickItemProps>();

  const handleChangeInput = (e: any) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleSubmitKeyword = async () => {
    try {
      const searchData = await getSearchData(keyword);
      console.log(searchData);
      console.info('calling api');
      setSearchedKeywords(searchData);
      return searchData;
    } catch (e) {
      alert('검색에 실패했습니다.');
    }
  };

  return (
    <>
      <Container>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <InputBox>
          <Input type='text' placeholder='🔍  질환명을 입력해 주세요.' onChange={handleChangeInput} value={keyword} />
          <CancelButton>ⅹ</CancelButton>
          <Button onClick={handleSubmitKeyword}>
            <img src={search_icon} width={20} height={20} alt='search_icon' />
          </Button>
        </InputBox>
      </Container>
      {
        searchedKeywords && (
          <SearchKeywords>
            {Object.values(searchedKeywords).map((searchedKeyword) => (
              <li
                key={searchedKeyword.sickCd}
              >
                {searchedKeyword.sickNm}
              </li>))
            }
          </SearchKeywords>
        )
      }
    </>
  );
};

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

  :focus {
    border: 2px solid #007BE9;
  }
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

const CancelButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  border: none;
  background-color: #afafaf;
  color: #FFFFFF;
  z-index: 1;
  cursor: pointer;
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  padding: 18px;
  margin-left: 15px;
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

const SearchKeywords = styled.ul`
  width: 100%;
  max-width: 490px;
  height: auto;
  padding: 20px 0 20px 0;
  margin: 0;
  background-color: white;
  border: none;
  border-radius: 20px;
  outline: none;
  position: relative;
  top: -30%;
  left: 26%;
  overflow-y: auto;
  z-index: 1;
  box-shadow: 0 3px 5px rgba(131, 131, 131, 0.3);
  list-style: none;
  display: inline-table;

  li {
    width: 100%;
    height: 40px;
    padding: 2px 35px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    &:hover {
      background: #f5f5f5;
    }
  }
`;
