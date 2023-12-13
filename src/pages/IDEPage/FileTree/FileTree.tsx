import { FileTreeConatiner } from './FileTree.styles';
import { Tree } from 'react-arborist';
import { Node } from './Node';
import CreateFile from './CreateFile';
import { Resizable } from 're-resizable';

export const data = [
  {
    id: '1',
    name: 'public',
    children: [{ id: 'c1-1', name: 'index.html' }],
  },
  {
    id: '2',
    name: 'src',
    children: [
      {
        id: 'c2-1',
        name: 'App.js',
        children: [{ id: '44', name: 'sdds.html' }],
      },
      { id: 'c2-2', name: 'index.js' },
      { id: 'c2-3', name: 'styles.css' },
    ],
  },
  { id: '3', name: 'package.json' },
  { id: '4', name: 'README.md' },
];

const FileTree = () => {
  return (
    <Resizable
      defaultSize={{
        width: '300px',
        height: '100%', // 초기 높이 설정
      }}
      enable={{
        top: false, // 위쪽으로만 리사이징 가능
        right: true,
        bottom: false,
        left: false,
        topRight: true,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
    >
      <FileTreeConatiner>
        <CreateFile />
        <Tree className="react-aborist" data={data}>
          {nodeProps => <Node {...nodeProps} />}
        </Tree>
      </FileTreeConatiner>
    </Resizable>
  );
};

export default FileTree;
