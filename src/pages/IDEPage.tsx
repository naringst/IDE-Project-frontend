import { ContentContainer, IDEContainer, IDEContentCode, Section } from "./IDEPage.style";
import Chatting from "./Chatting/Chatting";
import CodeMirrorEditor from "./CodeEditor/CodeMirrorEditor";
import FileTree from "./FileTree/FileTree";
import IDEHeader from "./Header/IDEHeader";
import TerminalTest from "./Terminal/TerminalTest";
import Toolbar from "./Toolbar/Toolbar";

const IDEPage = () => {
  return (
    <IDEContainer>
      <IDEHeader />
      <IDEContentCode>
        <ContentContainer>
          <Toolbar />
          <FileTree />
        </ContentContainer>

        <Section>
          <CodeMirrorEditor />
          <TerminalTest />
          {/* <Terminal /> */}
        </Section>

        <Chatting />
      </IDEContentCode>
    </IDEContainer>
  );
};

export default IDEPage;
