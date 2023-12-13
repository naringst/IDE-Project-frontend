import { styled } from 'styled-components';
import { FONTS } from '../../../constants/fonts';

export const FileTreeConatiner = styled.div`
  width: 100%;
  background: #d9d9d9;
  box-sizing: border-box;
  flex-direction: column;
  border-top: 2px solid ${props => props.theme.colors.bg};
  border-right: 3px solid ${props => props.theme.colors.primary};
  border-left: 2px solid ${props => props.theme.colors.bg};
  align-items: center;
  height: calc(100vh - 51px);
  background: ${props => props.theme.colors.headerBg};
`;

export const NodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: ${FONTS.sm};
  padding: 5px 0;
  cursor: pointer;

  .file-actions {
    display: none;
  }

  .file-actions button {
    border: none;
    margin-right: 5px;
    background: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  &:hover .file-actions {
    display: block;
  }

  .node-text {
    margin: '0px 3px';
  }
`;

export const FileDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// 파일 생성

export const CreateFileDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const FileButton = styled.button`
  border: none;
  background: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;
