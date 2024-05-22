import { useState } from "react";
import "../../../pages/global.css";
import { Button, Grid, TextField } from "../../../components/ui-parts";
import { loginClick } from "../hooks/useLogin";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [idValue, setId] = useState("");
  const [passValue, setPass] = useState("");
  const [missCount, setMissCount] = useState(0);

  return (
    <div>
      <Grid container>
        <Grid xs={5}>ログインID</Grid>
        <Grid xs={7}>
          <TextField
            id="outlined-basic"
            required
            value={idValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setId(event.target.value);
            }}
          />
        </Grid>
        <Grid xs={5}>パスワード</Grid>
        <Grid xs={7}>
          <TextField
            id="outlined-basic"
            required
            type="password"
            value={passValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPass(event.target.value);
            }}
          />
        </Grid>
      </Grid>
      <p id="errorMessage">{errorMessage}</p>
      <Button
        onClick={() =>
          loginClick(
            idValue,
            passValue,
            missCount,
            setErrorMessage,
            setMissCount
          )
        }
      >
        ログイン
      </Button>
    </div>
  );
};
