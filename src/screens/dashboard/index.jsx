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
import Navbar from "../../components/navbar"
const useStyles = makeStyles((theme) => ({
    dashboardhead:{
      marginLeft:"0.7%",
        fontWeight: 'bold',
        color:"#242021",
        fontSize:"bold",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    root: {
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
        borderRadius: 10,
      },
      TravelRequestGrid: {
        marginTop: theme.spacing.unit * 1,
        textalign: "left",
        marginRight: theme.spacing.unit * 1,
        color: "#1daab1",
        fontSize: "20px",
        fontWeight: "bold",
        opacity: "1",
      },
      CardStyle: {
        borderRadius: "20px",
    
        boxShadow: "0px 3px 6px #AFB4C929",
    
        opacity: "1",
    
        "&:hover": {
          boxShadow: "20px 10px 10px #AFB4C933",
        },
      },
      CardContent: {
        height: "100%",
        marginRight: theme.spacing.unit * 1,
        marginLeft: theme.spacing.unit * 1,
        shadowColor: "#2E9298",
        shadowOffset: { width: "10", height: "3" },
        shadowRadius: "30",
        shadowOpacity: "1.0",
      },
      Number: {
        fontSize: "50px",
        fontFamily: " Roboto,Medium",
        letterSpacing: "0px",
        color: "#242021",
        opacity: "1",
      },
      StatusText: {
        fontSize: "18px",
        letterSpacing: "0px",
        fontFamily: "Roboto,Medium",
        color: "#242021",
      },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [localbody, setAge] = React.useState('');
  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: '#e0e0e0',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
      <>
    <Navbar/>
    <div className={classes.root}>
      
    <Grid container justify="flex-start" alignItems="flex-start">
    <Typography className={classes.dashboardhead} variant="h5" noWrap>
      Dashboard
    </Typography>
  </Grid>
      <br></br>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="space-between"
        alignItems="center"
        // className={classes.ContainerStyle}
      >
        <Grid item xs>
          <Card variant="outlined" className={classes.CardStyle}>
            <CardContent className={classes.CardContent}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} md={6}>
                  <Typography className={classes.Number}>4</Typography>
                  <Typography className={classes.StatusText}>
                    Pending
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <img
                    className={classes.PendingImage}
                    src={pending}
                    alt="pending"
                  />
                </Grid> */}

                <Grid>{/* <img src={"./images/Approved.svg"} /> */}</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card variant="outlined" className={classes.CardStyle}>
            <CardContent className={classes.CardContent}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} md={6}>
                  <Typography className={classes.Number}>4</Typography>
                  <Typography className={classes.StatusText}>
                    Approve
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <img
                    className={classes.PendingImage}
                    src={Approve}
                    alt="Approve"
                  />
                </Grid> */}
                <Grid>{/* <img src={"./images/Approved.svg"} /> */}</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card variant="outlined" className={classes.CardStyle}>
            <CardContent className={classes.CardContent}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} md={6}>
                  <Typography className={classes.Number}>4</Typography>
                  <Typography className={classes.StatusText}>
                    Rejected
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <img
                    className={classes.PendingImage}
                    src={Reject}
                    alt="Reject"
                  />
                </Grid> */}
                <Grid>{/* <img src={"./images/Approved.svg"} /> */}</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card variant="outlined" className={classes.CardStyle}>
            <CardContent className={classes.CardContent}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} md={6}>
                  <Typography className={classes.Number}>4</Typography>
                  <Typography className={classes.StatusText}>
                    Rejected
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <img
                    className={classes.PendingImage}
                    src={Reject}
                    alt="Reject"
                  />
                </Grid> */}
                <Grid>{/* <img src={"./images/Approved.svg"} /> */}</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-between"
        alignItems="center"
        // className={classes.ContainerStyle}
      >
        <Grid item xs>
          <Card variant="outlined" className={classes.CardStyle}>
            <CardContent className={classes.CardContent}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} md={12}>
                <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
                </Grid>

               
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card variant="outlined" className={classes.CardStyle}>
            <CardContent className={classes.CardContent}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} md={12}>
                <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        
        
        
      </Grid>
     </div>

 </>
  );
}
