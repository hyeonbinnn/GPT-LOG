import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../styles/CommonStyles';
import { Input, Button } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';

const { TextArea } = Input;

const DiaryInput = ({ isLoading, onSubmit, messageApi }) => {
  const [userInput, setUserInput] = useState('');

  // 사용자 입력받아 상위 컴포넌트로 데이터 전달
  // 로딩 상태일 때는 사용자가 제출 버튼 못누르게 막기
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    if (!userInput) {
      messageApi.open({
        type: 'error',
        content: '일과를 적어주세요!',
      });
      return;
    }
    messageApi.open({
      type: 'success',
      content: '생성 요청 완료!',
    });
    onSubmit(userInput);
    setUserInput('');
  };
  return (
    <>
      <Title>오늘의 일기</Title>
      <TextArea
        rows={4}
        value={userInput}
        placeholder="당신의 하루와 고민을 적어주세요."
        onChange={handleUserInput}
        style={{
          height: '200px',
          padding: '15px',
          backgroundColor: '#ffffff',
          marginTop: '30px',
        }}
      />
      <ButtonContainer>
        <Button
          loading={isLoading}
          onClick={handleClick}
          style={{
            padding: '17px 20px',
          }}
        >
          <ButtonContent>시작</ButtonContent>
          <PlayCircleFilled style={{ fontSize: '19px' }} />
        </Button>
      </ButtonContainer>
    </>
  );
};

export default DiaryInput;

const ButtonContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin: 10px 0px;
  }
`;

const ButtonContent = styled.span`
  font-size: 19px;
  font-family: 'Cafe24Oneprettynight';

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 16px;
  }
`;
