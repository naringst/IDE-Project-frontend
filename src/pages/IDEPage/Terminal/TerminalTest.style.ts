import { styled } from 'styled-components';

export const TerminalContainer = styled.div`
  border-top: 2px solid ${props => props.theme.colors.primary};
  height: 100%;
  width: 100%;
`;

export const TerminalTestContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
`;