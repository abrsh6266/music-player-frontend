import { FaEdit } from "react-icons/fa";
import { Heading } from "rebass";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteMusic } from "../redux/action";
import MusicUpdateForm from "./MusicUpdateForm";
import { useState } from "react";
import { Music } from "./MusicCard";
interface Props{
  music: Music
}
function ActionIcon({music}:Props) {
  const [visible, setVisible] = useState(false);
  const handleCancel = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  return (
    <>
      <Heading>
        <button onClick={() => setVisible(true)}><FaEdit /></button>
        <MusicUpdateForm music={music} show={visible} onClose={handleCancel} />
      </Heading>
      <Heading>
        <button onClick={()=>{dispatch(deleteMusic(music.id))}}><BsTrash /></button>
      </Heading>
    </>
  );
}
export default ActionIcon;
