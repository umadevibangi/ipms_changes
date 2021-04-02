import React ,{useState}from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Login_Image from "../../assets/images/Login_Image.png"
import image2 from "../../assets/images/image4.png";
import Bg2 from "../../assets/images/Bg2.png";
import logonew from "../../assets/images/logonew.png";
import { Paper, Hidden } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import { Lock, Person, Email } from "@material-ui/icons";
import { createBrowserHistory } from "history";
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import GetAppIcon from '@material-ui/icons/GetApp';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ApartmentIcon from '@material-ui/icons/Apartment';
import localStorageHandler from "../../util/storage";
import { useEffect } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from "axios";
import { useHistory } from "react-router-dom";

import authenticationService from "../../service/AuthenticationService"
import {handleToken} from "./data/actions"
const useStyles = makeStyles((theme) => ({
  
  marginTOP: {
    marginTop: "5px",

    margin: "0 0 20px 0",
    width: "100%",
    height: "54px",
    background: "#692495 ",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
    opacity: "1",
    letterSpacing: "0px",
    color: "#ffffff",
    fontSize: "16px",
    textTransform: "none",
    "&:active": {
      backgroundColor: "#692495",
      color: "#ffffff",
    },
    "&:hover": {
      backgroundColor: "#692495",
      color: "#ffffff",
    },
  },
  loginPage: {
    padding: "0px",
    margin: "0px",
    letterSpacing: "0px",
    color: "#692495",
    opacity: "1",
    fontSize: "14px",
    textDecoration: "none",
  },
  root: {
    flexGrow: 1,
    height: "100%",
    marginTop: "-70px",
  },
  leftContent: {
    background: "#fff",
    float: "left",
    // marginRight: "20%",
    backgroundRepeat: "no-repeat",
    opacity: "1",
    textAlign: "center",
    margin: " -10px 0 0 0",
    position: " relative",
  },
  leftImage: {
    position: "absolute",
    position: " relative",
    width: "100%",

    padding: "0px",
    margin: "70px 0 0 0",
  },
  leftImage1: {
    position: " relative",
    width: "80%",
    marginTop: "-100%",
    marginLeft: "-40px",
    padding: "0px",
    margin: "70px 0 0 0",
  },
  rightContent: {
    background: "#ffffff",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    opacity: "1",
    position: "relative",
    height: "1em",
    margin: " 130px 0 0 0",
  },
  keralaPoliceLogo: {
    width: "148px",
    padding: "0px",
    marginBottom: "-50px",
    margin: "70px 0 0 0",
  },
  h1: {
    color: "#692495",
    textTransform: "uppercase",
    opacity: "1",
    letterSpacing: "0px",
    fontSize: "24px",
    margin: "10px 0 0 0",
    fontWeight: "500",
    marginTop: "50px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  TextField: {
    width: "100%",
    height: "55px",
    padding: "0",
    paddingBottom: "5px",
    margin: "0 0 20px 0",
    background: "#ffffff 0% 0% ",
    backgroundRepeat: "no-repeat",
    borderColor: "#c4ccdc",
    borderRadius: "8px",
    color: "#98a1b2",
    opacity: "1",
  },
  localbody:{
      float:"right",
    }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [state , setState] = useState({
  
    showPassword: false,
})
const [localbody , setLocalbody] = useState(
 ""
)

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState()

const [token,setToken]=useState("")

const[status,setStatus]=useState("")
const[role_id,setRoleId]=useState("")
const[basicDetails,setBasicDetails] = useState("")
// const handleChange = event => {
//   const name = event.target.name;
//   setState({
//     ...state,
//     [name]: event.target.value
//   });
// };


// const handlePassword = (prop) => (event) => {
//   setState({ ...state, [prop]: event.target.value });
// };

const handleClickShowPassword = () => {
  setState({ ...state, showPassword: !state.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const handleLocalbody = event => {
  var base_url = null;
  if (event.target.value===1){
    base_url="http://test.ulgis.com:6060/";
 
  }
  setLocalbody(event.target.value);

  localStorageHandler.setBaseUrl(base_url );

};

// const handleSubmit =()=>{
//   const userCredentials = {
//     "X-username": this.state.username,
//     "X-password": this.state.password,
//   
// }
const handleSubmit= ()=> {

  const userCredentials = {
    "username": username,
    "password": password,
  
    "device_id":"AASAd"
  };

  axios.post("http://test.ulgis.com:6060/auth/login",userCredentials).then(
    (res) => {
 
      console.log(res);
    
      setToken(res.data.token)
      setStatus(res.status)
      setRoleId(res.data.basicDetails.role.role_id)
      setBasicDetails(res.data.basicDetails)

      console.log(token)
      console.log(status)
      console.log(role_id)
      console.log(basicDetails)
      localStorage.setItem("basicDetails",JSON.stringify(basicDetails))
      localStorage.setItem("token",token)
      // {
      // handleToken(token);
      // console.log(token)
      // }
      if 
        (status == 200 && role_id== "1") 
      
       {
        
      
        history.push("/dashboard");
      } else {
  
      }
    

    }
  )
  // var response= userCredentials;
  // authenticationService.login(userCredentials).then(
  //   response => {
  //     console.log(response)
     
  //   },
    
  // );
  // this.props.doLogin(userCredentials);
 
  // localStorageHandler.setLoginResponse(response );



}

// useEffect(()=>{
  
// }, [])
//  useEffect((prevprops) => {
  
  // if (
  //   user.isAuthenticated &&
  //   user.isAuthenticated !== prevprops.isAuthenticated
  // ) {
  //   localStorageHandler.setLoginResponse(user.userInfo);
  //   user.history.push("/map");
  // }
  // },);
  return (
    <div className={classes.root}>
        <Grid container className={classes.loginPage}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.leftContent}
            item
            xs={12}
            md={6}
          >
            <Hidden xsDown>
              <img className={classes.leftImage} src={Bg2} alt="Bg2" />
              <img className={classes.leftImage1} src={Login_Image} alt="Login_Image" />
            </Hidden>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            className={classes.rightContent}
          >
            <Grid item xs={10} md={6}>
              <img
                className={classes.keralaPoliceLogo}
                src={logonew}
                alt="logonew"
              />

              <Typography color="inherit" variant="h4" className={classes.h1}>
                User login
              </Typography>
              <br></br>
              <br></br>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                    <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Select
                       displayEmpty
                      
                      variant="outlined"
                      value={localbody}
                      onChange={handleLocalbody}
                      className={classes.TextField}
                      inputProps={{ 'aria-label': 'Without label' }}
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton>
                            <ApartmentIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                    >
                       <MenuItem value="">
            <em>select localbody</em>
          </MenuItem>
           <MenuItem value={1}>test</MenuItem>
          <MenuItem value={2}>Waaynaad</MenuItem>
        
              {/* <option value="" disabled >Select localbody</option>
               
                <option value="Kannur">Kannur</option>
                <option value="Waaynaad">Waaynaad</option>
                <option value="Kozhikode">Kozhikode</option> */}
                </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <OutlinedInput
                   
                    name="username"
                    type="text"
                    value={username}
             
                      // id="outlined-basic"
                      // label="Username"
                      placeholder="username"
                    
                     
                      onChange={({ target }) => setUsername(target.value)}
                      className={classes.TextField}
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton>
                            <Email/>
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                   
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <OutlinedInput
                      required
                      onChange={({ target }) => setPassword(target.value)}
                   
                      type="password"
                      value={password}
                     name="password"
                    
                      id="standard-adornment-password"
                      type={state.showPassword ? 'text' : 'password'}
                      value={state.password}
                      
                    //   type={this.showPassword ? "text" : "password"}
                      
                      placeholder="password"
                      variant="outlined"
                      className={classes.TextField}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {state.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton>
                            <Lock />
                          </IconButton>
                        </InputAdornment>
                      }

                    />
                    
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    // color="primary"
                    onClick={handleSubmit}
                    // disabled={this.props.isLoading ? true : false}
                    className={classes.marginTOP}
                   
                  >
                    Login
                  </Button>
                </Grid>
                
                
                
              </Grid>

             
            </Grid>
          </Grid>
          
                   
        </Grid>
      </div>
 
  );
}
