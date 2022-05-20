import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./Header.css";
import myntra_logo from "../../assets/Myntra_logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "grey",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
      backgroundColor: "#9992",
      color: "black",
      float: "right",
      paddingBottom: "15px",
      paddingTop: "15px",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#fff",
          paddingTop: "18px",
          paddingBottom: "18px",
        }}
      >
        <Toolbar>
          <img
            src={myntra_logo}
            alt="Myntra"
            style={{ width: "6%", paddingLeft: "30px" }}
          ></img>
          <Typography className="{classes.title}, navtitle" variant="h6" noWrap>
            MENS
          </Typography>
          <Typography className="{classes.title}, navtitle" variant="h6" noWrap>
            WOMENS
          </Typography>
          <Typography className="{classes.title}, navtitle" variant="h6" noWrap>
            KIDS
          </Typography>
          <Typography className="{classes.title}, navtitle" variant="h6" noWrap>
            HOME & LIVING
          </Typography>
          <Typography className="{classes.title}, navtitle" variant="h6" noWrap>
            BEAUTY
          </Typography>
          <Typography className="{classes.title}, navtitle" variant="h6" noWrap>
            STUDIO
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "#282c3f" }} />
            </div>
            <InputBase
              style={{ color: "#696e79", width: "100%" }}
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="grey">
              <Badge badgeContent={4} color="primary">
                <LocalMallOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="grey">
              <Badge badgeContent={17} color="secondary">
                <FavoriteBorderOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Link to='/myntra/signup'>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="grey"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
