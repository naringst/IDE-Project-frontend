import FileTree from './FileTree/FileTree';
import IDEHeader from './Header/IDEHeader';
import {
  IDEContentCode,
  ContentContainer,
  CodeContainer,
  IDEContainer,
} from './IDEPage.style';
import Toolbar from './Toolbar/Toolbar';
// import Terminal from './Terminal/Terminal';

const IDEPage = () => {
  return (
    <IDEContainer>
      <IDEHeader />

      <IDEContentCode>
        <ContentContainer>
          <Toolbar />
          <FileTree />
        </ContentContainer>

        <CodeContainer>
          {/* <Terminal/> */}
          {/* <CodeEditor/>    */}
        </CodeContainer>
      </IDEContentCode>
    </IDEContainer>
  );
};

export default IDEPage;
