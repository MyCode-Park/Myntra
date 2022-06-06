import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ActionButton } from "./ActionButton";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "relative",  zIndex: 0,
    backgroundColor: "#FFE6F3",
    height: "100vh",
    overFlow: "hidden",
    width: "100%",
    minWidth: "300px",

    "& .MuiFormControl-root": {
      "& label": {
        color: "rgba(40,44,63,.7)",
        fontSize: "12px",
        fontFamily:
          "WhitneySSm,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
        fontSize: "16px",
        position: "relative",
        top: "8px",

        width: "59%",
        margin: "0px",
        wordSpacing: "3px",
        backgroundColor: "white",
        padding: "0px",
        textAlign: "center",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "#d4d5d9", // - Set the Input border
      },
      "&:hover fieldset": {
        borderColor: "#d4d5d9", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        border: "1px solid #d4d5d9",
        transition: ".4s",
      },
    },
  },

  container: {
    justifyContent: "center",
    margin: 0,
    paddingTop: "70px",
    
  },
  content: {
    width: "400px",
    minWidth: "350px",
  },
  textField: {
    position: "relative",
    bottom:'10px',
    marginLeft: "theme.spacing.unit",
    marginRight: "theme.spacing.unit",
  },
  notchedOutline: {
    border: "1px solid #d4d5d9",
    height: "50px",
    
  },
  loginContainer: {
    padding: "80px 10% 0",
    backgroundColor: "#fff",
    minHeight: "80vh",
    maxHeight: "80vh",
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

function ResetForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid className={classes.content}>
          <div className={classes.loginContainer}>
            <div
              className={classes.loginLabel}
              style={{ textAlign: "left", fontFamily: "WhitneySSm" }}
            >
              <h2
                style={{
                  fontFamily:
                    "WhitneySSm,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif,SEGOE UI",
                  marginBottom: "8px",
                  fontWeight: "500",
                  lineHeight: "1.3",
                  fontSize: "18px",
                  color: "#282c3f",
                }}
              >
                Reset Password
              </h2>
              <p
                style={{
                  color: "rgba(40,44,63,.7)",
                  fontSize: "12px",
                  fontFamily:
                    "WhitneySSm,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                }}
              >
                Enter your email or mobile number and we'll send a link on your
                email to reset your password
              </p>
            </div>

            <form
              onSubmit={() => {
                console.log("It is working");
              }}
            >
              <TextField
                id="outlined-email-input"
                label="Email or Mobile Number"
                className={classes.textField}
                fullWidth
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              
              <ActionButton
                kind="PRIMARY"
                type="submit"
                label={"send link"}
                style={{
                  width: "100%",
                  padding: "6px 45px",
                  borderRadius: "0px",
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
                paddingBottom: "50px",
              }}
              onClick={() => console.log("I am working")}
            >
              Unable to reset password?
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

export default ResetForm;
