import { Button, Modal, Form, Input } from "antd";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { deleteStudentGrades } from "../../api/Auth";
const DeleteGrade = ({
  modaldata,
  isModalVisible,
  handleCloseDeleteModal,
  // handleCancel,
  // handleOk,
  //onFinish,
  // onFinishFailed,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    // console.log(" Modal Data delete ", modaldata);
    if (isModalVisible) {
      form.setFieldsValue({
        id: modaldata.id,
      });
    }
  }, [isModalVisible]);

  const handleDelete = async (values) => {
    //console.log("Delete confirm ", values);

    const response = await deleteStudentGrades(values);

    console.log("delete ===> ", response);
    if (response.status === 200) {
      // console.log("delete suucess ", response);
      toast.success("Deleted");

      handleCloseDeleteModal();
    } else {
      // console.log(" Error in modal ", response.data);
      toast.error("Something went wrong please try again");

      handleCloseDeleteModal();
    }
  };

  return (
    <Modal
      title={modaldata.name}
      visible={isModalVisible}
      onOk={handleCloseDeleteModal}
      onCancel={handleCloseDeleteModal}
      //onFinish={handleDelete}
      footer={null}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleDelete}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p>Please confirm deletion</p>

        <Form.Item label="id" name="id" style={{ display: "none" }}>
          <Input type="text" name="id" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Confim Delete
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DeleteGrade;
