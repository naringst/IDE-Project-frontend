import { FileTreeConatiner } from './FileTree.styles';
import { Tree } from 'react-arborist';
import { Node } from './Node';

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
    <FileTreeConatiner>
      <Tree className="react-aborist" data={data}>
        {nodeProps => <Node {...nodeProps} />}
      </Tree>
    </FileTreeConatiner>
  );
};

export default FileTree;
