import Chatting from './Chatting/Chatting';
import CodeEditor from './CodeEditor/CodeEditor';
import FileTree from './FileTree/FileTree';
import IDEHeader from './Header/IDEHeader';
import {
  IDEContentCode,
  ContentContainer,
  IDEContainer,
  Section,
} from './IDEPage.style';
import TerminalTest from './Terminal/TerminalTest';
import Toolbar from './Toolbar/Toolbar';

const IDEPage = () => {
  return (
    <IDEContainer>
      <IDEHeader />
      <IDEContentCode>
        <ContentContainer>
          <Toolbar />
        </ContentContainer>
        <FileTree />

        <Section>
          <CodeEditor />
          <TerminalTest />
        </Section>
        <Chatting />
      </IDEContentCode>
    </IDEContainer>
  );
};

export default IDEPage;
