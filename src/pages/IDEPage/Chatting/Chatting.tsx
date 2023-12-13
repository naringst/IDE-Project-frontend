import { Resizable } from 're-resizable';
import { ChattingContainer } from './Chatting.style';

const Chatting = () => {
  return (
    <Resizable
      defaultSize={{
        width: '300px',
        height: '100%', // 초기 높이 설정
      }}
      enable={{
        top: false, // 위쪽으로만 리사이징 가능
        right: false,
        bottom: false,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <ChattingContainer>Chatting</ChattingContainer>
    </Resizable>
  );
};

export default Chatting;
