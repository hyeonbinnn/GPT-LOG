import React from 'react';
import { CardContainer, CardTitle, CardContent } from '../../styles/CommonStyles';

const DiaryCard = ({ icon, title, content }) => {
  return (
    <CardContainer>
      <CardTitle>
        {icon}
        {title}
      </CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default DiaryCard;
