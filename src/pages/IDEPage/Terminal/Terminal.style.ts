import { styled } from 'styled-components';

export const TerminalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 300px;
  width: 100%;
  background: red;
`;

export const TerminalTestContainer = styled.div`
  border-top: 2px solid ${props => props.theme.colors.primary};
  height: 100%;
  margin: 0;
  box-sizing: border-box;
`;
