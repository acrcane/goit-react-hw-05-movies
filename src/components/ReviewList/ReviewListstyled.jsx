import styled from 'styled-components';

export const RevList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

export const RevItem = styled.li`
    border:1px solid #000;
    padding: 15px;
    margin: 0;
`;

export const RevName = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 15px;
`;

export const RevText = styled.p`
    font-weight: 400;
    font-size: 14px;
    margin: 0;
    margin-top: 10px;
    line-height: 1.3;
`;