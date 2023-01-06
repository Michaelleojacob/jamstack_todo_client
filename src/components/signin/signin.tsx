import { useContext, useState } from "react";
import { AuthContext } from "../authContext/authContext";
import { fetchSignin } from "../../fetchRequests/auth";

const Signin = () => {
  const { signin } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetchSignin(userInfo.username, userInfo.password);
    console.log(res);
    if (res.succ) signin(res.userInfo);
  };
  return (
    <div>
      <div>Signin</div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          name={"username"}
          value={userInfo.username}
          onChange={handleChange}
        ></input>
        <label htmlFor="password">password</label>
        <input
          name={"password"}
          value={userInfo.password}
          onChange={handleChange}
        ></input>
        <button type="submit">sign in</button>
      </form>
      <button type="submit">signin</button>
    </div>
  );
};

export default Signin;
