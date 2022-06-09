import { Form, Input, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../api/Auth";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const SubmitForm = async (values) => {
    const response = await login(values);

    //console.log("response login ",response);
    //console.log("response login ",response.status);
    if (response.status === 200) {
      console.log(" staus s 200");
    } else {
      console.log(" staus bad ", response.response.status);
    }

    form.resetFields();

    if (response.status === 200) {
      //console.log("token", response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/app");
    } else {
      // console.log("Login values ", response.response.data.message);
      toast.error(response.response.data.message);
    }

    // console.log("Login values ", response);
  };

  const handleRegister = () => {
    console.log(" register ");
    navigate("/register");
  };
  return (
    <div className="box">
      <h1>Login</h1>
      <Form className="" onFinish={SubmitForm} form={form}>
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
                Login
              </Button>
            </Form.Item>
            <h4> New user ?</h4>
            <Form.Item>
              <Button type="link" onClick={handleRegister}>
                Register
              </Button>
            </Form.Item>{" "}
          </div>
        </Space>
      </Form>
    </div>
  );
};
export default Login;
