import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../authContext/authContext";
import { fetchSignin } from "../../fetchRequests/auth";

const Signin = () => {
  const { signin } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPw(e.target.value);
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetchSignin(username, pw);
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
          value={username}
          onChange={handleChangeUsername}
        ></input>
        <label htmlFor="pw">password</label>
        <input name={"password"} value={pw} onChange={handleChangePw}></input>
        <button type="submit">sign in</button>
      </form>
      <button type="submit">signin</button>
    </div>
  );
};

export default Signin;
