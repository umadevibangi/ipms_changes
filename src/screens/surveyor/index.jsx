import React,{useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import { fade, makeStyles ,withStyles} from '@material-ui/core/styles';
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
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    clearSearchBtngreen: {
        padding: "0",
        margin: "9px 0 0 0",
        width: "112px",
        textAlign: "right",
        lineHeight: "40px",
        height: "39px",
        color: "#ffffff",
        backgroundColor: "green",
        fontSize: "small",
        textTransform: "none",
        "&:active": {
          backgroundColor: "green",
          color: "#ffffff",
        },
        "&:hover": {
          backgroundColor: "green",
          color: "#ffffff",
        },
      },
      clearSearchBtnred: {
        padding: "0",
        margin: "9px 0 0 0",
        width: "112px",
        textAlign: "right",
        lineHeight: "40px",
        height: "39px",
        color: "#ffffff",
        backgroundColor: "red",
        fontSize: "small",
        textTransform: "none",
        "&:active": {
          backgroundColor: "red",
          color: "#ffffff",
        },
        "&:hover": {
          backgroundColor: "red",
          color: "#ffffff",
        },
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
    },
    TextField: {
        width: "100%",
        height: "48px",
        padding: "0",
        paddingBottom: "5px",
        margin: "0 0 10px 0",
        background: "#ffffff 0% 0% ",
        backgroundRepeat: "no-repeat",
        borderColor: "#c4ccdc",
        borderRadius: "8px",
        color: "#98a1b2",
        opacity: "1",
      },
      dialogPaper: {
        minHeight: '20vh',
        maxHeight: '20vh',
    },
}));
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('1', "ravikumar", "user", 24, "Active"),
    createData('2', "kavyaram", "admin", 37, "Inactive"),
    createData('3', "prathapkumar", "user", 24, "Active"),
    createData('4', "sushanth", "admin", 67, "Inactive"),
    createData('5', "yaswanthkumar", "user", 49, "Active"),
  ];
  const data = [
      {text: 'Man', value: 500}, 
      {text: 'Woman', value: 300} 
    ];
     
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
export default function Surveyor() {
  const [testArr, setTestArr] = useState([
    {
      id: 1,
      start: "uma",
      stop: "User",
      edit:"",
      status:"active"
    },
    {
      id: 2,
      start:"sravani",
      stop: "Admin",
      edit:"",
      status:"active"
    }
  ]);
  const classes = useStyles();
 
  const [surveyorType, setSurveyorType] = useState([]
)
const [surveyorName, setSurveyorName] = useState(""
)
const [editSurveyor, seteditSurveyor] = useState(""
)
const [äctive, setäctive] = useState(""
)


const [isActive, setActive] = useState(false);
const [state, setState] = useState(true);
const [open, setOpen] = React.useState(false);
const [index, setIndex] = useState();

function toggle() {
  setState(!state);
}
const addRow = async e => {
  var obj = {
    id: testArr.length + 1,
    start: surveyorName,
    stop: surveyorType,
    edit:"",
    status:""
  };

  var data = testArr;
  data.push(obj);

  setTestArr([...data]);
};

  // const handleSurveyor = (event) => {
  //   setSurveyorType(event.target.value);
  // };
  // const handleChange = (event) => {
  //   setSurveyorName(event.target.value);
  // };
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      border: "none",
    },
    body: {
      fontSize: 14,
      border: "none",
      
    },
    
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
       
        
      },
      
    },
  }))(TableRow);
  return (
    <>
    <Navbar/>
     <div className={classes.paper1} style={{border: '1px ',borderRadius: '9px'}}>
         <Grid container justify="flex-start" alignItems="flex-start">
          <Typography className={classes.datadownloadhead} variant="h5" noWrap>
           Add Surveyor
           </Typography>
             </Grid>
      <br></br>
     {/* <Paper  style={{border: '1px ',borderRadius: '9px'}}> */}
     <div className={classes.paper} style={{border: '1px ',borderRadius: '9px'}}>
      <Grid container direction="row" spacing={3}>
      
        <Grid item md={4} xs={12}>
          {/* <label>Surveyor name</label> */}

          <FormControl  fullWidth>
           
        
            <OutlinedInput
                type="surveyorName"
                id="surveyorName" 
                name="surveyorName"
                // id="outlined-basic"
                value={surveyorName}
                onChange={e => setSurveyorName(e.target.value)}  
                placeholder="Surveyor name"
                // onChange={handleChange}
                //   value={state.password}
                //   onChange={handleChange} 
                // variant="outlined"
                className={classes.TextField}
                    
            />
           
          </FormControl>
        </Grid>
        <Grid item md={4} xs={12}>
         
          <FormControl  fullWidth>
            
         
                    <Select
                      
                     name="surveyorType"
                      value={surveyorType}
                      variant="outlined"
                      type="surveyorType"
                      onChange={e => setSurveyorType(e.target.value)}

                      // onChange={handleSurveyor}
                      className={classes.TextField}
                      displayEmpty
                  
                      inputProps={{ 'aria-label': 'Without label' }}
                    //   inputProps={{ 'aria-label': 'Without label' }}
                      
                    >
                        <MenuItem value="">
            <em>Select surveyor type</em>
          </MenuItem>
           <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="User">User</MenuItem>
        
            
                
                </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} xs={12}>
          
          <FormControl error fullWidth>
        <Button style={{
               marginTop: "0.1px",

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
              value="+"
              onClick={e => addRow(e)}
              >Add Surveyor</Button>
            
           
          </FormControl>
        </Grid>
       
      </Grid>
     
      {/* </Paper> */}
      </div>
    </div>
    <div className={classes.paper1} style={{border: '1px ',borderRadius: '9px'}}>
         <Grid container justify="flex-start" alignItems="flex-start">
    <Typography className={classes.datadownloadhead} variant="h5" noWrap>
      Surveyor Details
    </Typography>
  </Grid>
      <br></br>
     {/* <Paper  style={{border: '1px ',borderRadius: '9px'}}> */}
     <div className={classes.paper} style={{border: '1px ',borderRadius: '9px'}}>
      <Grid container direction="row" spacing={3}>
      <Table
               aria-label="simple table"
               className={classes.table}
               >
                    <TableHead className={classes.tablehead}>
                         <TableRow >
                      <StyledTableCell
                       align="left"
                       style={{ color: "#242021", fontWeight: 'bold', }}
                    >
                        Surveyor Name            </StyledTableCell>
                     <StyledTableCell  align="center" style={{ color: "#242021", fontWeight: 'bold', }}> Surveyor Type</StyledTableCell>
                    
                      <StyledTableCell align="center" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Edit
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ color: "#242021", fontWeight: 'bold', }}>
                      status
                     </StyledTableCell>
                     
                     </TableRow>
                    </TableHead>

              
                     <TableBody>
                     {/* {console.log(this.state.rows)} */}
                     {testArr.map((item, index) => (
                     <StyledTableRow  key={item.id}   >
                       <StyledTableCell align="left" style={{ color: "#242021", }}>
                    {item.start}
                    </StyledTableCell>
                     <StyledTableCell align="center"  >{item.stop}</StyledTableCell>
                    
                    {/* <StyledTableCell align="center" style={{ color: "#242021" }}>
                    {item.stop}
                    </StyledTableCell> */}
                    <StyledTableCell align="center" style={{ color: "#242021" }}>
                    <Button
                           onClick={handleClickOpen}
                            // color="primary"
                          >
                            < EditIcon>
                        {item.edit}
                        </EditIcon>
                          </Button>                   
                    </StyledTableCell>
                    <StyledTableCell align="center" style={{ color: "#242021" }}>
                    {state ?
                    <Button
                            className={classes.clearSearchBtngreen}
                            variant="contained"
                            onClick={toggle}
                            // color="primary"
                        //     onClick={() =>
                        //       isActive === true ? setActive(false) : setActive(true)
                        //     }
                        //     style={{ background: isActive ? "red" : "green",
                        //  }}
                          >
                        {/* {item.status} */}
                        active
                          </Button>    
                          :        
                          <Button
                          onClick={toggle}
                            className={classes.clearSearchBtnred}
                            variant="contained"
                            // color="primary"
                          
                          >
                        {/* {item.status} */}
                        inactive
                        </Button>    }       
                    </StyledTableCell>
                  </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
        
       
      </Grid>
     
      {/* </Paper> */}
      </div>
    </div>
    <div>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true}
maxWidth = {'md'} classes={{ paper: classes.dialogPaper }}>
        <DialogTitle id="form-dialog-title">Update Surveyor</DialogTitle>
        <DialogContent style={{ overflow: "hidden" }} >
          
       <Grid container direction="row" spacing={3}>
      
      <Grid item md={4} xs={12}>
      
        <FormControl  fullWidth>
         
      
          <OutlinedInput
              // type="surveyorName"
              // id="surveyorName" 
              // name="surveyorName"
              // // id="outlined-basic"
              // value={surveyorName}
              // onChange={e => setSurveyorName(e.target.value)}  
              placeholder="Surveyor name"
              // onChange={handleChange}
              //   value={state.password}
              //   onChange={handleChange} 
              // variant="outlined"
              className={classes.TextField}
                  
          />
         
        </FormControl>
      </Grid>
      <Grid item md={4} xs={12}>
       
        <FormControl  fullWidth>
          
       
                  <Select
                    
                  //  name="surveyorType"
                    value={surveyorType}
                    variant="outlined"
                  //   type="surveyorType"
                  //   onChange={e => setSurveyorType(e.target.value)}

                    // onChange={handleSurveyor}
                    className={classes.TextField}
                    displayEmpty
                
                    inputProps={{ 'aria-label': 'Without label' }}
                  //   inputProps={{ 'aria-label': 'Without label' }}
                    
                  >
                      <MenuItem value="">
          <em>Select surveyor type</em>
        </MenuItem>
         <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      
          
              
              </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} xs={12}>
        
        <FormControl error fullWidth>
      <Button style={{
             marginTop: "0.1px",

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
            value="+"
           
            >Update </Button>
          
         
        </FormControl>
      </Grid>
      <Grid item md={2} xs={12}>
        
        <FormControl error fullWidth>
      <Button style={{
             marginTop: "0.1px",

          //    margin: "0 0 20px 0",
             width: "100%",
             height: "49px",
             background: "#bdbdbd",
             backgroundRepeat: "no-repeat",
             borderRadius: "8px",
             opacity: "1",
             letterSpacing: "0px",
             color: "#ffffff",
             fontSize: "16px",
             textTransform: "none",
             "&:active": {
               backgroundColor: "#bdbdbd",
               color: "#ffffff",
             },
             "&:hover": {
               backgroundColor: "#bdbdbd",
               color: "#ffffff",
             },
            }}
           
            margin="Dense" 
         
         
            >cancel</Button>
          
         
        </FormControl>
      </Grid>
     
    </Grid>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
      </div>
    </>
    );
}
