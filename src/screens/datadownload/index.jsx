import React from 'react';
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
import TextField from "@material-ui/core/TextField";
import { Paper, Hidden } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import { Lock, Person, Email } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import pending from "../../assets/images/Pending.svg";
import Approve from "../../assets/images/Approved.svg";
import Reject from "../../assets/images/Rejected.svg";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Bar} from 'react-chartjs-2';
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
  } from "@material-ui/pickers";
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
import Navbar from "../../components/navbar"

import InputLabel from '@material-ui/core/InputLabel';
import ApartmentIcon from '@material-ui/icons/Apartment';
const useStyles = makeStyles((theme) => ({
    datadownloadhead:{
      marginLeft:"0.2%",
        fontWeight: 'bold',
        color:"#242021",
        fontSize:"bold",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    paper1: {
    
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 10,
      // textAlign: "cr",
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
       
      },
      background: "#F5F6FA ",
      boxShadow: "none",
      // width: "95%",
      // marginLeft: "30px",
      // marginBottom: "190px",
      borderWidth: 1, 
      borderRadius: 40,
    },
    paper:{
            
       
      padding: theme.spacing.unit * 6.5,
      // textAlign: "cr",
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
        marginTop:"0.5%",
      },
      background: "#FFFFFF ",
      boxShadow: "none",
      borderWidth: 1, 
      borderRadius: 30,
      // width: "95%",
      // marginLeft: "30px",
      // marginBottom: "190px",
    }
}));

export default function Datadownload() {
    var today = new Date();
  const classes = useStyles();
  const [localbody, setAge] = React.useState('');
  const [selectedToDate, setSelectedToDate] = React.useState(new Date(today));

  const [selectedFromDate, setSelectedFromDate] = React.useState(
    new Date(today)
  );
  const handleFromtDateChange = date => {
    setSelectedFromDate(date);
  };
  const handleTotDateChange = date => {
    setSelectedToDate(date);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <Navbar/>
     <div className={classes.paper1} style={{border: '1px ',borderRadius: '9px'}}>
         <Grid container justify="flex-start" alignItems="flex-start">
    <Typography className={classes.datadownloadhead} variant="h5" noWrap>
      Data Download
    </Typography>
  </Grid>
      <br></br>
     {/* <Paper  style={{border: '1px ',borderRadius: '9px'}}> */}
     <div className={classes.paper} style={{border: '1px ',borderRadius: '9px'}}>
      <Grid container direction="row" spacing={3}>
      
        <Grid item md={4} xs={12}>
          

          <FormControl  fullWidth>
           
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
           style={{
            height: "38px",
            position: "relative",
            minWidth: "95%",
            background: "#ffffff 0% 0%",
            borderRadius: " 4px",
            opacity: "1",
            marginTop: "8px",
            fontSize: "small",
            border: " 1px solid #ccc",
            paddingRight: "24px",
            padding: "3px 14px",
            color: "#a2a2a2",
          }}
          placeholder="From date"
          margin="Dense"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{
            shrink: true,
          }}
            disableToolbar
           
            format="dd/MM/yyyy"
           
            required
           
            id="selectedFromDate"
            
            value={selectedFromDate}
            onChange={handleFromtDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>

           
          </FormControl>
        </Grid>
        <Grid item md={4} xs={12}>
         
          <FormControl  fullWidth>
            
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
           style={{
            position: "relative",
            minWidth: "95%",
            background: "#ffffff 0% 0%",
            borderRadius: " 4px",
            opacity: "1",
            marginTop: "8px",
            fontSize: "small",
            border: " 1px solid #ccc",
            paddingRight: "24px",
            padding: "3px 14px",
            color: "#a2a2a2",
            height: "38px"
          }}
          placeholder="To date"
          margin="Dense"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{
            shrink: true,
          }}
            disableToolbar
          
           
            format="dd/MM/yyyy"
            required
            
            id="selectedFromDate"
            
            value={selectedToDate}
            onChange={handleTotDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
            
          </FormControl>
        </Grid>
        <Grid item md={4} xs={12}>
          
          <FormControl error fullWidth>
        <Button style={{
               marginTop: "5px",

            //    margin: "0 0 20px 0",
               width: "100%",
               height: "49px",
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
              }}
              placeholder="Confirm Password"
              margin="Dense" 
              >Download</Button>
            
           
          </FormControl>
        </Grid>
       
      </Grid>
     
      {/* </Paper> */}
      </div>
    </div>
    </>
    );
}
