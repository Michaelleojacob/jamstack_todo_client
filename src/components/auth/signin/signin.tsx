import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/authContext";
import { fetchSignin } from "../../../fetchRequests/auth";
import { namepw } from "../../../types/types";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const Signin = () => {
  const { signin, switchToSignup } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState<namepw>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetchSignin(userInfo.username, userInfo.password);
    console.log(res);
    if (res.succ) signin(res.userInfo);
    setLoading(false);
  };

  return (
    <div>
      <div>sign in</div>
      <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <TextField
            name="username"
            label="username"
            value={userInfo.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <TextField
            name="password"
            label="password"
            value={userInfo.password}
            onChange={handleChange}
            required
            type="password"
          />
        </div>
        <LoadingButton loading={loading} variant="contained" type="submit">
          submit
        </LoadingButton>
      </Box>
      <div>
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={switchToSignup}
        >
          sign up
        </LoadingButton>
      </div>
    </div>
  );
};

export default Signin;

{
  /* <div>Signin</div>
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
<Button type="primary" onClick={switchToSignup}>
  sign up
</Button> */
}
