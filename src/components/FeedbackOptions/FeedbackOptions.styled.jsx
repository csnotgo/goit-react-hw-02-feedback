import styled from 'styled-components';

export const BtnBox = styled.ul`
  display: flex;
  gap: 15px;
`;

export const FeedbackBtn = styled.button`
  width: 70px;
  padding: 5px;

  font-size: 16px;

  border: 1px solid #5b87e6;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: #5b87e6;
    transform: scale(1.1);
  }
`;
