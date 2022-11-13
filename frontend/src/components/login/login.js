import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login({ setUserName, setPassword, loginClicked }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("loggedIn")) === true) {
      navigate("/list");
    }
  });
  return (
    <>
      <Grid container spacing={2} sx={{ px: 3 }}>
        <Grid item xs></Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div className="loginOuter">
            <h1>Login</h1>
            <div>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                color="warning"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                color="warning"
                sx={{ my: 4 }}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={loginClicked}
              >
                submit
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  );
}

export default Login;
