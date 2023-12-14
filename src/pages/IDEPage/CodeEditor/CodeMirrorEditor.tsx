// import yorkie from 'yorkie-js-sdk';
import { useEffect, useRef, useState } from 'react';
import { githubDark } from '@uiw/codemirror-theme-github';
import { python } from '@codemirror/lang-python';
import CodeMirror from '@uiw/react-codemirror';
import { LanguageSupport } from '@codemirror/language';
import { markdown } from '@codemirror/lang-markdown';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { html } from '@codemirror/lang-html';
import { json } from '@codemirror/lang-json';
import { java } from '@codemirror/lang-java';
import { css } from '@codemirror/lang-css';
import { debounce } from 'ts-debounce';

const EXTENSIONS: { [key: string]: LanguageSupport } = {
  python: python(),
  javascript: javascript(),
  typescript: javascript({ typescript: true }),
  jsx: javascript({ jsx: true }),
  tsx: javascript({ jsx: true, typescript: true }),
  cpp: cpp(),
  'c++': cpp(),
  java: java(),
  html: html(),
  css: css(),
  markdown: markdown(),
  json: json(),
};

const CodeMirrorEditor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, _] = useState('python');
  const [text, setText] = useState("print('hello world')");

  const updateBackend = (newText: string) => {
    console.log(`Updated backend with: ${newText}`);
  };

  const updateTextDebounced = useRef(
    debounce((newText: string) => updateBackend(newText), 1000 * 2)
  );
  useEffect(() => {
    updateTextDebounced.current(text);
  }, [text]);

  return (
    <CodeMirror
      value={text}
      onChange={value => {
        setText(value);
      }}
      theme={githubDark}
      extensions={[EXTENSIONS[language]]}
      basicSetup={{
        autocompletion: true,
        lineNumbers: true,
        highlightActiveLine: true,
        highlightSpecialChars: true,
        history: true,
        drawSelection: true,
        dropCursor: true,
        foldGutter: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        rectangularSelection: true,
        closeBrackets: true,
        bracketMatching: true,
        crosshairCursor: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        searchKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
      height="500px"
      minWidth={'500px'}
      minHeight={'100vh'}
      autoFocus={true}
    />
  );
};

export default CodeMirrorEditor;
