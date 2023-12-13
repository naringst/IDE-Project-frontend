import CodeMirrorEditor from './CodeMirrorEditor/CodeMirrorEditor';
import FileTree from './FileTree/FileTree';
import IDEHeader from './IDEHeader';
import { ContentContainer, IDEContainer } from './IDEPage.style';
import Toolbar from './Toolbar';

const IDEPage = () => {
  return (
    <IDEContainer>
      <IDEHeader />
      <ContentContainer>
        <Toolbar />
        <FileTree />
        <CodeMirrorEditor />
      </ContentContainer>

      {/* <Terminal/> */}
      {/* <CodeEditor/>    */}
    </IDEContainer>
  );
};

export default IDEPage;
