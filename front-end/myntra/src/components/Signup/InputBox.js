 signup
import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment ,IconButton} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
 main
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      color: "black", //or try theme.palette.primary.main
      backgroundColor: "white", //It should be white by default
      border: "1px solid #d4d5d9",
      padding: "2px 6px",
      "&:hover": {
        border: "1px solid #d4d5d9",
      },
    },
    "& .MuiInput-underline:before": {
      borderBottom: 0,
    },
    "& .MuiInput-underline:after": {
      borderBottom: 0,
    },
    "& .MuiInputBase-root:hover": {
      borderBottom: 0,
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: 0,
    },
    paddingBottom: "16px",
  },
}));

export function InputBox(props) {
  const classes = useStyles();
  const {
    id,
    type,
    name,
    label,
    value,
    onChange,
    error,
    helperText,
    fullWidth,
    placeholder,

    onClick
  } = props;
  return (
    <TextField
      inputProps={{
        style: { border: "none" },
        classes: {
          //  root: classes.inputCss
          notchedOutline: classes.notchedOutline,
        },

        endAdornment: (
          <InputAdornment position="end" >
            <IconButton onClick={onClick} style={{color:'red'}}></IconButton>
          </InputAdornment>
        ),

      }}
      className={classes.root}
      id={id}
      type={type ? type : "text"}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      placeholder={placeholder}

      onClick={onClick}


    />
  );
}
