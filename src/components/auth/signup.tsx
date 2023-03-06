import { useState } from "react";
import { namepw } from "../../types/types";
import { fetchSignup } from "../../fetchRequests/fetchAuth";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackBar } from "../context/snackbarContext";
import { useAppContext } from "../context/appContext";
import Lock from "./signin_signout_icon";

const Signup = () => {
  const { showSnackBar } = useSnackBar();
  const { switchToSignin } = useAppContext();

  const [userInfo, setUserInfo] = useState<namepw>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const clearUserInfo = () => setUserInfo({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetchSignup({
      username: userInfo.username,
      password: userInfo.password,
    });
    if (res.succ) {
      clearUserInfo();
      switchToSignin();
      showSnackBar(res.msg, "success");
    }
    if (!res.succ) showSnackBar(res.msg, "warning");
    setLoading(false);
  };

  return (
    <Box
      className="signup_container"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0.5rem 0rem",
      }}
    >
      <Lock />
      <Box
        className="signup_title"
        sx={{ fontSize: "1.5rem", padding: "0.5rem 0rem" }}
      >
        sign up
      </Box>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="signup_form_wrapper"
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
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
          sign up
        </LoadingButton>
      </Box>
      <Box className="signup_switch_button">
        <LoadingButton
          loading={loading}
          variant="text"
          onClick={switchToSignin}
          sx={{
            textTransform: "none",
            textDecoration: `underline #90caf9`,
            padding: "0.5rem 0rem",
          }}
        >
          already have an account? Sign in
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default Signup;
