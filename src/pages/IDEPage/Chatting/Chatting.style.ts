import { styled } from 'styled-components';

export const ChattingContainer = styled.div`
  resize: horizontal;
  overflow: auto;
  min-width: 140px; /* 최소 너비 설정 */
  height: 100%;
  width : 100%
  box-sizing: border-box;
  border-left: 3px solid ${props => props.theme.colors.primary};
`;
