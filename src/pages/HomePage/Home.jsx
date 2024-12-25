import { useState } from 'react';
import { message } from 'antd';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { CallGPT } from '../../api/gpt';
import DiaryInput from '../../components/Diary/DiaryInput';
import DiaryDisplay from '../../components/Diary/DiaryDisplay';
import { dummyData } from './../../data/dummyData';
import { useGetThumbnail } from '../../api/image';

const Home = () => {
  const [data, setData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleClickAPICall = async (userInput) => {
    try {
      setIsLoading(true);

      const thumbnail = await useGetThumbnail(userInput);
      const message = await CallGPT({
        prompt: userInput,
        thumbnail: thumbnail,
      });

      const messageData = JSON.parse(message);
      messageData.thumbnail = thumbnail;
      setData(messageData);
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error?.message,
      });
      return;
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = (userInput) => {
    console.log('userInput', userInput);
    handleClickAPICall(userInput);
  };

  return (
    <HomeContainer>
      {contextHolder}
      <HomeTitle>
        <h2 className="a11y-hidden">로고 타이틀</h2>
        <img src={logo} alt="GPT-LOG 로고" />
      </HomeTitle>
      <DiaryInput isLoading={isLoading} onSubmit={handleSubmit} messageApi={messageApi} />
      <DiaryDisplay data={data} isLoading={isLoading} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  padding: 70px 30px;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 50px 10px;
    width: 90%;
  }
`;

const HomeTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 90px;

  img {
    width: 450px;
    max-width: calc(100% - (50px * 2));
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-bottom: 60px;
  }
`;
