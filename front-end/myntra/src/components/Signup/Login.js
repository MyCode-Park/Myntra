import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ActionButton } from "./ActionButton";
import { InputBox } from "./InputBox";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: "#fff",
    position: "absolute",
    zIndex: 100,
  },
  root: {
    // position: "relative",  zIndex: 0,
    backgroundColor: "#FFE6F3",
    height: "100vh",
    overFlow: "hidden",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
    paddingTop: "40px",
  },
  content: {
    width: "400px",
  },

  //   banner: {
  //     width: "100%",
  //     height: "120px",
  //   },
  loginLabel: {
    marginBottom: "20px",
    fontWeight: "500",
    fontSize: "20px",
    color: "#424553",
  },
  loginContainer: {
    padding: "30px",
    backgroundColor: "#fff",
  },
  primaryBtn: {
    color: "#fff",
    backgroundColor: "#ff3e6c",
    borderColor: "#ff3e6c",
    fontWeight: 600,
    padding: "12px",
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "#ec5e80",
    },
  },
}));

function Login(props) {
  const classes = useStyles();
  const [passwordShown, setPasswordShown] = useState(false);
  function shownhandler() {
    setPasswordShown(!passwordShown);
    console.log("helloworld");
  }
  function eventhandler(e){
    e.preventDefault();
    console.log("helloworld");
  }
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid className={classes.content}>
          <div className={classes.loginContainer}>
            <div
              className={classes.loginLabel}
              style={{ textAlign: "left", fontFamily: "WhitneySSm" }}
            >
              Login to your account
            </div>

            <form
              onSubmit={() => {
                console.log("It is working");
              }}
            >
              <InputBox
                fullWidth
                id="phone number"
                type="text"
                name="Email or phone number"
                placeholder="Email or Mobile Number"
                onChange={(e) => e.target.value}
              ></InputBox>{" "}
              <InputBox
                fullWidth
                type={passwordShown ? "password" : "text"}
                id="outlined-password-input"
                name="phone number"
                placeholder="Password"
                onChange={(e) => e.target.value}
                onClick={shownhandler}
                endAdornment={props.endAdornment}
              ></InputBox>{" "}
              <ActionButton
                kind="PRIMARY"
                type="submit"
                label={"Continue"}
                style={{
                  width: "100%",
                  padding: "6px 45px",
                  marginTop: "15px",
                  borderRadius: "0px",
                }}
                onClick={() => {
                  eventhandler();
                }}
              />
            </form>
            <div
              style={{
                marginTop: "4px",
                cursor: "pointer",
                textAlign: "left",
                paddingTop: "20px",
                fontWeight: "500",
                fontSize: "13px",
                fontFamily: "WhitneySSm",
              }}
              onClick={() => console.log("I am working")}
            >
              Forgot your password ?
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#ff3c6f",
                  fontWeight: "500",
                  fontSize: "13px",
                  fontFamily: "WhitneySSm",
                  cursor: "pointer",
                }}
              >
                &nbsp; Reset here
              </a>
            </div>
            <div
              style={{
                marginTop: "4px",
                cursor: "pointer",
                textAlign: "left",
                paddingTop: "20px",
                fontWeight: "500",
                fontSize: "13px",
                fontFamily: "WhitneySSm",
              }}
              onClick={() => console.log("I am working")}
            >
              Have trouble logging in?
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#ff3c6f",
                  fontWeight: "500",
                  fontSize: "13px",
                  fontFamily: "WhitneySSm",
                  cursor: "pointer",
                }}
              >
                &nbsp; Get help
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
