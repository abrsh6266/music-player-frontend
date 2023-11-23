import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { useDispatch } from 'react-redux'
import { fetchGenres, updateMusic } from "../redux/action";
interface Props {
  music: any | null;
  show: boolean;
  onClose: () => void;
}

function MusicUpdateForm({ music, show, onClose }: Props){
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    genre: "",
    releaseDate: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  useEffect(() => {
    if (music) {
      setFormData({
        title: music.title,
        artist: music.artist,
        genre: music.genre,
        releaseDate: music.releaseDate
      });
    }
  }, [music]);
  return (
    <Modal
      title="Update Music"
      open={show}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button 
        key="update" 
        type="primary" 
        onClick={()=>{
          dispatch(updateMusic(music.id,formData));
          dispatch(fetchGenres());
          onClose();
          }}>
          Update
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Title">
          <Input
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Artist">
          <Input
            type="text"
            placeholder="Enter artist"
            name="artist"
            value={formData.artist}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Genre">
          <Input
            type="text"
            placeholder="Enter genre"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Release Date">
          <Input
            type="date"
            placeholder="Enter release date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleInputChange}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MusicUpdateForm;
