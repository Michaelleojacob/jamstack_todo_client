import { useContext, useState } from "react";
import { AuthContext } from "../authContext/authContext";
import { fetchSignin } from "../../fetchRequests/auth";
import { Button } from "antd";

const Signin = () => {
  const { signin } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    const res = await fetchSignin(userInfo.username, userInfo.password);
    res.succ ? signin(res.userInfo) : setErr(res.msg);
    setLoading(false);
  };
  return (
    <div>
      <div>Signin</div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        ></input>
        <label htmlFor="password">password</label>
        <input
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        ></input>
        <Button type="primary" htmlType="submit" loading={loading}>
          sign in
        </Button>
      </form>
      <div style={{ color: "red" }}>{err ? err : null}</div>
    </div>
  );
};

export default Signin;
