import { styled } from 'styled-components';

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 48px;
  height: calc(100vh - 60px);
  background: ${props => props.theme.colors.headerBg};
`;

