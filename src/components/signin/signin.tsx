import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../authContext/authContext";

const Signin = () => {
  const { mockSignin } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPw(e.target.value);
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, pw);
    const res = await fetch("http://localhost:3002/auth/signin", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      // headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        username: "username",
        password: "pw",
        lolwtf: "lol",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    console.log(res);
  };
  useEffect(() => {
    console.log(username, pw);
  }, [username, pw]);
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
      <button onClick={mockSignin}>signin</button>
    </div>
  );
};

export default Signin;
