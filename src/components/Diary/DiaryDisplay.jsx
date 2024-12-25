import { Image } from 'antd';
import {
  CheckCircleTwoTone,
  BookTwoTone,
  SmileTwoTone,
  MessageTwoTone,
  SoundTwoTone,
} from '@ant-design/icons';
import styled from 'styled-components';
import { DiaryContainer, Title, ActionListItem } from '../../styles/CommonStyles';
import Loading from '../Loading/Loading';
import DiaryCard from './DiaryCard';
import defaultImage from '../../assets/defaultImage.png';

const ThumbnailImage = styled(Image)`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const DiaryDisplay = ({ data, isLoading }) => {
  return (
    <DiaryContainer>
      {isLoading && <Loading />}
      <Title>{data?.title}</Title>

      {/* 요약 */}
      <DiaryCard
        icon={<CheckCircleTwoTone twoToneColor="#92b4d8" style={{ marginRight: '6px' }} />}
        title="요약"
        content={data?.summary}
      />

      {/* 썸네일 */}
      <ThumbnailImage src={data?.thumbnail || defaultImage} alt="Thumbnail" />

      {/* 일기장 */}
      <DiaryCard
        icon={<BookTwoTone twoToneColor="#FF9AA2" style={{ marginRight: '6px' }} />}
        title="미니 로그"
        content={data?.emotional_content}
      />

      {/* 내가 느낀 감정 */}
      <DiaryCard
        icon={<SmileTwoTone twoToneColor="#ffce7f" style={{ marginRight: '6px' }} />}
        title="내가 느낀 감정"
        content={data?.emotional_result}
      />

      {/* 심리 분석 */}
      <DiaryCard
        icon={<MessageTwoTone twoToneColor={'#aaebd3'} style={{ marginRight: '6px' }} />}
        title="심리 분석"
        content={data?.analysis}
      />

      {/* GPT 조언 */}
      <DiaryCard
        icon={<SoundTwoTone twoToneColor="#cabbff" style={{ marginRight: '6px' }} />}
        title="GPT 조언"
        content={data?.action_list.map((action, index) => (
          <ActionListItem key={index}>{action}</ActionListItem>
        ))}
      />
    </DiaryContainer>
  );
};

export default DiaryDisplay;
