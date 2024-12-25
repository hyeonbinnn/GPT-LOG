import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UpCircleFilled } from '@ant-design/icons';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button onClick={scrollTop} $show={isVisible ? 'true' : 'false'}>
      <UpCircleFilled style={{ fontSize: '40px' }} />
      <span className="a11y-hidden">페이지 상단으로 이동 버트</span>
    </Button>
  );
};

export default ScrollTopButton;

const Button = styled.button`
  display: ${({ $show }) => ($show === 'true' ? 'block' : 'none')};
  position: fixed;
  bottom: 60px;
  right: 50px;
  background-color: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    right: 20px;
  }
`;
