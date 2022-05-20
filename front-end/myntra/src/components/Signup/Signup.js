import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { InputBox } from "./InputBox";
import { ActionButton } from "./ActionButton";
import Login_logo from "../../assets/Login_logo.JPG";


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
    overFlow:'hidden'
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
  bannerContainer: {
    height: "160px",
    backgroundColor: "#FFF9E7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  banner: {
    width: "100%",
    height: "120px",
  },
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

function Signup() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid className={classes.content}>
          <div className={classes.bannerContainer}>
            <img
              src={Login_logo}
              alt="login_banner"
              style={{ minWidth: "390px" }}
            />
          </div>
          <div className={classes.loginContainer}>
            <div
              className={classes.loginLabel}
              style={{ textAlign:'left', fontFamily: "WhitneySSm" }}
            >
              Login <span>or</span> Signup{" "}
            </div>

            <form
              onSubmit={() => {
                console.log("It is working");
              }}
            >
              <InputBox
                fullWidth
                id="phone number"
                type="number"
                name="phone number"
                label="required"
                placeholder="+91 | Mobile Number"
                onChange={(e) => e.target.value}
              />{" "}
              <div
                style={{

                  marginTop: "4px",
                  cursor: "pointer",
                  textAlign:'left',
                  fontSize:'13px',
                  fontFamily:'WhitneySSm',
                  lineHeight: '1.7',
                  
                  letterSpacing:'0.25px',
                  
                  
                  
                }}
                onClick={() => console.log("I am working")}
              >
                By Continuing, I agree to the <a href="/" style={{textDecoration: 'none',color:'#ff3c6f',cursor:'pointer',fontWeight:'500',fontSize:'13px',fontFamily:'WhitneySSm'}}>Terms of Use & Privacy <br></br> Policy
                </a>
               </div>
              {/* <div style={{textAlign:"left",color:'#ff3c6f',fontWeight:'500',fontSize:'13px',fontFamily:'WhitneySSm'}}>
                Policy
              </div> */}
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
              />
            </form>
            <div
                style={{

                  marginTop: "4px",
                  cursor: "pointer",
                  textAlign:'left',
                  paddingTop:'20px',
                  fontWeight:'500',
                  fontSize:'13px',
                  fontFamily:'WhitneySSm',
                  
                }}
                onClick={() => console.log("I am working")}
              >
                Having trouble logging in?<a href="/" style={{textDecoration: 'none',color:'#ff3c6f',fontWeight:'500',fontSize:'13px',fontFamily:'WhitneySSm',cursor:'pointer'}}>Get help</a> 
              </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
