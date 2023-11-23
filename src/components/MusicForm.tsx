import { Form, Input, Modal } from "antd";
import { useDispatch } from "react-redux";
import { addMusic } from "../redux/action";

interface Props {
  visible: boolean;
  onCancel: () => void;
}

function MusicForm({ visible, onCancel }: Props) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      title="Add Music"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            dispatch(addMusic(values));
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="artist" label="Artist" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="genre" label="Genre" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="releaseDate"
          label="Release Date"
          rules={[{ required: true }]}
        >
          <Input type="date" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default MusicForm;
