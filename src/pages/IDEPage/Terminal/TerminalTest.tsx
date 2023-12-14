import { Resizable } from 're-resizable';
import { TerminalTestContainer } from './Terminal.style';

const TerminalTest = () => {
  return (
    <Resizable
      defaultSize={{
        height: '200px',
        width: '100%', // 초기 높이 설정
      }}
      enable={{
        top: true, // 위쪽으로만 리사이징 가능
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <TerminalTestContainer>Terminaldsfdf Test</TerminalTestContainer>
    </Resizable>
  );
};

export default TerminalTest;
