import {
  AiOutlinePicCenter,
  AiOutlineCopy,
  AiOutlineShareAlt,
  AiOutlineSound,
  AiOutlineAudio,
} from "react-icons/ai";
import { ToolbarContainer } from "./IDEPage.style";

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <AiOutlineCopy
        style={{ width: "30px", height: "30px", margin: "0 0 15px 0" }}
      />
      <AiOutlinePicCenter
        style={{ width: "30px", height: "30px", margin: "0 0 15px 0" }}
      />
      <AiOutlineShareAlt
        style={{ width: "30px", height: "30px", margin: "0 0 15px 0" }}
      />
      <AiOutlineSound
        style={{ width: "30px", height: "30px", margin: "0 0 15px 0" }}
      />
      <AiOutlineAudio
        style={{ width: "30px", height: "30px", margin: "0 0 15px 0" }}
      />
    </ToolbarContainer>
  );
};

export default Toolbar;
