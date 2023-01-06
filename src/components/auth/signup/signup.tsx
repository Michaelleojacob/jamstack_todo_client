import { useState } from "react";
import { namepw } from "../../../types/types";
import { fetchSignup } from "../../../fetchRequests/auth";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackBar } from "../../context/snackbar/snackbar";
import { useAppContext } from "../../context/authContext/authContext";

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
    <div>
      <div>signup</div>
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
          onClick={switchToSignin}
        >
          sign in
        </LoadingButton>
      </div>
    </div>
  );
};

export default Signup;
