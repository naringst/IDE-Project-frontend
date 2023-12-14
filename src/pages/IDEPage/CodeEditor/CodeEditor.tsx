// import { Resizable } from 're-resizable';
import CodeMirrorEditor from './CodeMirrorEditor';
import { CodeEditorContainer } from './CodeEditor.style';

const CodeEditor = () => {
  return (
    <>
      <CodeEditorContainer>
        <CodeMirrorEditor />
      </CodeEditorContainer>
    </>
  );
};

export default CodeEditor;
