import {
  AiOutlinePicCenter,
  AiOutlineCopy,
  AiOutlineShareAlt,
  AiOutlineSound,
  AiOutlineAudio,
} from 'react-icons/ai';
import { ToolbarContainer } from './Toolbar.style';
import { IconContext } from 'react-icons';

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <IconContext.Provider
        value={{
          style: { width: '28px', height: '28px', margin: '0 0 15px 0' },
        }}
      >
        <AiOutlineCopy />
        <AiOutlinePicCenter />
        <AiOutlineShareAlt />
        <AiOutlineSound />
        <AiOutlineAudio />
      </IconContext.Provider>
    </ToolbarContainer>
  );
};

export default Toolbar;
