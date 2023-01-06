import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/authContext";
import { Button, Form, Input } from "antd";
import { namepw } from "../../../types/types";
import { fetchSignup } from "../../../fetchRequests/auth";

const Signup = () => {
  const { switchToSignin } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const onFinish = async ({ username, password }: namepw) => {
    setLoading(true);
    console.log(username, password);
    const res = await fetchSignup({ username, password });
    setLoading(false);
    // if(res) setMsg
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="username"
          name="username"
          rules={[{ required: true, message: "username cannot be empty" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: "password cannot be empty" }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          submit
        </Button>
      </Form>
      <Button type="primary" onClick={switchToSignin}>
        sign in
      </Button>
    </div>
  );
};

export default Signup;
