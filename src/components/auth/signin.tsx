import { useState } from "react";
import { fetchSignin } from "../../fetchRequests/fetchAuth";
import { namepw } from "../../types/types";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackBar } from "../context/snackbarContext";
import { useAppContext } from "../context/appContext";

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
