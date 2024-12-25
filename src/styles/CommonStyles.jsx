import styled from 'styled-components';

export const Title = styled.div`
  font-size: 40px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 28px;
  }
`;

export const DiaryContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  border-radius: 2px;
  margin: 30px 0px 10px 0px;
`;

export const CardTitle = styled.div`
  color: #6a7c83;
  font-size: 24px;
  margin-bottom: 20px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 18px;
  }
`;

export const CardContent = styled.div`
  font-size: 18px;
  line-height: 1.2;
`;

export const ActionList = styled.ul``;

export const ActionListItem = styled.li`
  margin-bottom: 5px;
`;
