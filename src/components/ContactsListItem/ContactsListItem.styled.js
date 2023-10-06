import styled from 'styled-components';

export const ContactItemList = styled.li`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-size: 18px;
`;

export const BtnDelete = styled.button`
  width: 100px;
  font-size: 18px;
  margin-left: 20px;
  &:hover,
  :focus {
    background-color: #00bfff;
  }
`;

export const Phone = styled.p`
  margin-left: auto;
`;
