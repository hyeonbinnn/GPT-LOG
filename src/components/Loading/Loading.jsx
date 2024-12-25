import React from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
  return (
    <LoadingOverlay>
      <LoadingOutlined style={{ fontSize: '50px', marginBottom: '30px' }} />
      <span>불러오는중...</span>
    </LoadingOverlay>
  );
};

export default Loading;

const LoadingOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  font-size: 30px;
  pointer-events: none;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 25px;
  }
`;
