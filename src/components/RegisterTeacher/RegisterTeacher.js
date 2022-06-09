import { Form, Input, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import { register } from "../../api/Auth";
import { useState } from "react";
//  import "./RegisterTeacher.css";

const RegisterTeacher = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Password is strong");
    } else {
      setErrorMessage("Password is weak");
    }
  };
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const SubmitForm = async (values) => {
    console.log("register form vakues ", values);

    const response = await register(values);
    console.log("register form  res ", response.response.data.message);
    if (response.data) {
      toast.success("registration successful");

      navigate("/login");
    } else {
      toast.error(response.response.data.message);
    }
    form.resetFields();
  };

  const onInputChangeName = (e) => {
    const { value } = e.target;
    // console.log("Input value: ", value);

    let newV = value.replace(/[^A-Za-z]/gi, "");

    form.setFieldsValue({ n: newV });
  };

  return (
    <div className="box">
      <Form className="login" onFinish={SubmitForm} form={form}>
        <h1>Register</h1>
        <div className="email">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="email">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="email">
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <Space>
          <div className="mybtn">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </div>
        </Space>
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {errorMessage}
        </span>
      </Form>
    </div>
  );
};
export default RegisterTeacher;
