
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import React,{useState} from 'react';
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


const UserTable = props => {

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
        color: "#242021",
        backgroundColor: "#C5D4DF",
        fontSize: "small",
        textTransform: "none",
        "&:active": {
          backgroundColor: "#C5D4DF",
          color: "#242021",
        },
        "&:hover": {
          backgroundColor: "#C5D4DF",
          color: "#242021",
        },
      },
      clearSearchBtnred: {
        padding: "0",
        margin: "9px 0 0 0",
        width: "112px",
        textAlign: "right",
        lineHeight: "40px",
        height: "39px",
        color: "#242021",
        backgroundColor: "#ffffff",
        fontSize: "small",
        textTransform: "none",
        "&:active": {
          backgroundColor: "#ffffff",
          color: "#242021",
        },
        "&:hover": {
          backgroundColor: "#ffffff",
          color: "#242021",
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

const usersData = [
  // { id: 1, name: 'Tania', username: 'Admin',state :true },
  // { id: 2, name: 'Craig', username: 'User',state :true },
  // { id: 3, name: 'Ben', username: 'User',state :true },
]
const initialFormState = { id: null, name: '', username: '',state:'' }

const [isActive, setActive] = useState(false);
const [state, setState] = useState(true);
const [open, setOpen] = React.useState(false);
const [index, setIndex] = useState();
const [ users, setUsers ] = useState(usersData)
const [ currentUser, setCurrentUser ] = useState(initialFormState)




const toggle = (state,id) => {
  console.log(state,id)
  console.log(users)
  // setState( !state);
  setUsers(users.map(user => (user.id === id ? user.state : !state)))

}
// const addRow = async e => {
//   var obj = {
//     id: testArr.length + 1,
//     start: surveyorName,
//     stop: surveyorType,
//     edit:"",
//     status:""
//   };

//   var data = testArr;
//   data.push(obj);

//   setTestArr([...data]);
// };

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
                    {props.users.length > 0 ? (
                    
                     props.users.map(user => (
                     <StyledTableRow  key={user.id} >
                       <StyledTableCell align="left" style={{ color: "#242021", }}>
                       {user.name}
                    </StyledTableCell>
                     <StyledTableCell align="center"  >{user.username}</StyledTableCell>
                    
                    {/* <StyledTableCell align="center" style={{ color: "#242021" }}>
                    {item.stop}
                    </StyledTableCell> */}
                    <StyledTableCell align="center" style={{ color: "#242021" }}>
                    <Button
                         onClick={() => {
                          props.editRow(user)
                        }}
                            // color="primary"
                          >
                            < EditIcon>
                        
                        </EditIcon>
                          </Button>                   
                    </StyledTableCell>
                    <StyledTableCell align="center" style={{ color: "#242021" }}>
                 {user.state===true?
                    <Button
                            className={classes.clearSearchBtnred}
                            variant="contained"
                        //  onClick={()=>{toggle(state,user.id)}}
                            onClick={() => {
                              props.updateUserstatus(user)
                            }}
                            // color="primary"
                        //     onClick={() =>
                        //       isActive === true ? setActive(false) : setActive(true)
                        //     }
                        //     style={{ background: isActive ? "red" : "green",
                        //  }}
                        value={state}
                          >
                        {/* {item.status} */}
                        inactive
                          </Button>    
                              :<Button
                              className={classes.clearSearchBtngreen}
                              variant="contained"
                          //  onClick={()=>{toggle(state,user.id)}}
                              onClick={() => {
                                props.updateUserstatus(user)
                              }}
                              // color="primary"
                          //     onClick={() =>
                          //       isActive === true ? setActive(false) : setActive(true)
                          //     }
                          //     style={{ background: isActive ? "red" : "green",
                          //  }}
                          value={state}
                            >
                          {/* {item.status} */}
                          active
                            </Button> }  
                    </StyledTableCell>
                  </StyledTableRow>
                  ))
      ) : (
        <StyledTableRow   >
                               <StyledTableCell align="center"  > No users</StyledTableCell>

        
                               </StyledTableRow>
      )}
                  </TableBody>
                </Table>
        
       
      </Grid>
     
      {/* </Paper> */}
      </div>
 
</>
)
      }

export default UserTable