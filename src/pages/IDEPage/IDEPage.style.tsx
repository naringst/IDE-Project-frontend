import {
  HeaderContainer,
  Logo,
} from '../../components/MainHeader/MainHeader.style';
import styled from 'styled-components';
import { FONTS } from '../../constants/fonts';
import { AiOutlineComment } from 'react-icons/ai';

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

export const IDEHeaderContainer = styled(HeaderContainer)`
  height: 48px;
  padding-top: 0px;
`;

export const IDELogo = styled(Logo)`
  font-size: ${FONTS.lg};
`;

export const StyleAiOutlineComment = styled(AiOutlineComment)`
  padding-right: 20px;
  width: 28px;
  height: 28px;
  margin-left: 10px;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentUserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: 0 4px;
  border-radius: 50%;
  background: pink;
  font-size: ${FONTS.xs};
  overflow: hidden;
`;

//toolbar
export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 48px;
  height: calc(100vh - 60px);
  background: ${props => props.theme.colors.headerBg};
`;

export const FileTreeConatiner = styled(ToolbarContainer)`
  width: 300px;
  background: #d9d9d9;
`;

export const TerminalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 300px;
  width: 100%;
  background: #d9d9d9;
`;
