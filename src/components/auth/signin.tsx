import { useState } from "react";
import { fetchSignin } from "../../fetchRequests/fetchAuth";
import { namepw } from "../../types/types";
import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackBar } from "../context/snackbarContext";
import { useAppContext } from "../context/appContext";
import FakeUserInfo from "./fakeUserInfo";
import Lock from "./signin_signout_icon";

const Signin = () => {
  const { showSnackBar } = useSnackBar();
  const { signin, switchToSignup } = useAppContext();

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
    if (res.succ) {
      signin(res.userInfo);
      showSnackBar(res.msg, "success");
    }
    if (!res.succ) showSnackBar(res.msg, "warning");
    setLoading(false);
  };

  return (
    <Box className="signin_container">
      <Lock />
      <div className="signin_title">sign in</div>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="signin_form_wrapper"
      >
        <Box>
          <TextField
            name="username"
            label="username"
            value={userInfo.username}
            onChange={handleChange}
            required
          />
        </Box>
        <Box>
          <TextField
            name="password"
            label="password"
            value={userInfo.password}
            onChange={handleChange}
            required
            type="password"
          />
        </Box>
        <LoadingButton loading={loading} variant="outlined" type="submit">
          sign in
        </LoadingButton>
      </Box>
      <Box className="signin_switch_button">
        <LoadingButton
          loading={loading}
          variant="text"
          onClick={switchToSignup}
          sx={{
            textTransform: "none",
            textDecoration: `underline #90caf9`,
          }}
        >
          Don't have an account? Sign up
        </LoadingButton>
      </Box>
      <FakeUserInfo />
    </Box>
  );
};

export default Signin;
