import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import error from '../../assets/error.svg';
import styled from 'styled-components';
import { Button } from 'antd';

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <ErrorContainer>
        <h2 className="a11y-hidden">404에러</h2>
        <img src={error} alt="404에러 발생 이미지" loading="lazy" />
        <ButtonBox>
          <Button color="default" variant="outlined" onClick={goBack}>
            <ButtonSpan>Go Back</ButtonSpan>
          </Button>
          <Link to="/">
            <Button
              color="default"
              variant="filled"
              style={{ backgroundColor: '#494949', color: '#ffff', border: 'none' }}
            >
              <ButtonSpan>Home</ButtonSpan>
            </Button>
          </Link>
        </ButtonBox>
      </ErrorContainer>
    </>
  );
};

export default Error;

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    width: 500px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ButtonSpan = styled.span`
  font-size: 18px;
  font-family: 'Cafe24Oneprettynight';
`;
