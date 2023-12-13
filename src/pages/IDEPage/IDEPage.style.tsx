import styled from 'styled-components';

export const IDEContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const IDEContentCode = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 남은 공간을 메인 영역이 채움 */
  height: 100%;
  margin: 0;
`;
