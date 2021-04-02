import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { withStyles, makeStyles } from '@material-ui/core/styles';

// import StyledTableCell from '@material-ui/core/StyledTableCell';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Pagination from '@material-ui/lab/Pagination';
import BarChart from 'react-bar-chart';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Navbar from "../../components/navbar"
import DashboardIcon from '@material-ui/icons/Dashboard';
import "./styles.css"
const useStyles = makeStyles((theme) => ({
    reporthead:{
        fontWeight: 'bold',
        color:"#242021",
        fontSize:"bold",
        marginLeft:"1%",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  table: {
    minWidth: 650,
    borderWidth: 1, 
    borderRadius: 10,
    marginTop:"-1.2%"
  },
  root: {
    display: "flex",
  },
 
  cctnsearchBox: {
    padding: "20px",
    margin: "10px 0",
    background: "#eceff4",
    borderRadius: "4px"
  },
  tablehead: {
    borderWidth: 1, 
    borderRadius: 10,
  

    color:"#ffffff"
  },
  tableheadrow:{

  },
  tablerow:{
background:"#F5F6FA"
},
  root123: {
    width: "93%",

    marginTop: "1%",
    marginBottom: "1%"
  },
  cell1: {
    width: "30%"
  },
  selectEmpty: {
    position: "relative",
    minWidth: "50%",
    background: "#ffffff 0% 0%",
    borderRadius: " 4px",
    opacity: "1",
    marginTop: "8px",
    fontSize: "small",
    border: " 1px solid #ccc",
    // paddingRight: "24px",
    float:"left",
    padding: "3px 14px",
    color: "#a2a2a2",
  },
  clearSearchBtn: {
    padding: "0",
    margin: "9px 0 0 0",
    width: "112px",
    float:"left",
    lineHeight: "40px",
    height: "39px",
    color: "#ffffff",
    backgroundColor: "#692495",
    fontSize: "small",
    textTransform: "none",
  },
  paginationalign: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    float: "center",
    marginLeft: "38%",
  },
  dashboardContent: {
    padding: "24px 0",
    margin: "0"
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
  },
 
 
}));

  
  

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
  createData('5', 356, 16.0, 49, 3.9),
];
const data = [
    {text: 'Man', value: 500}, 
    {text: 'Woman', value: 300} 
  ];
   
  const margin = {top: 20, right: 20, bottom: 30, left: 40};
export default function BasicTable() {
  const classes = useStyles();
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
            <div className={classes.paper1}>
               
                <Grid container justify="flex-start" alignItems="flex-start">
    <Typography className={classes.reporthead} variant="h5" noWrap>
      Report
    </Typography>
  </Grid>
      <br></br>
                 <div className={classes.paper}>
                <Grid xs={12} md={12}>
                   
                    <Grid container spacing={2}>
                        <Grid item xs={5} >
                          <TextField
                            InputProps={{ disableUnderline: true }}
                            
                            //   id="outlined-full-width"
                              style={{ margin: 8 }}
                            placeholder="Search here"
                            //   fullWidth
                            margin="normal"
                            placeholder="Enter Application ID"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className={classes.selectEmpty}
                            InputProps={{
                              disableUnderline: true,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchIcon className={classes.SearchIcon} />
                                </InputAdornment>
                              ),
                            }}
                          />
                          {/* <Button
                            className={classes.clearSearchBtn}
                            variant="contained"
                            // color="primary"
                          >
                            search
                          </Button> */}
                        </Grid>
                        
                    </Grid>
                   
                </Grid>
        
        
                <Divider   style={{ margin: 20 }}variant="middle" />
            <>
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
                        Sl.no                  </StyledTableCell>
                     <StyledTableCell style={{ color: "#242021", fontWeight: 'bold', }}> R_GU </StyledTableCell>
                     <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                     R_NC
                     </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Non_Res
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      NR_DO
                     </StyledTableCell>
                     <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      NR_DOCost
                     </StyledTableCell>
                     <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      NR_DC
                     </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      NR_PDC
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      NR_PDCCost
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      NR_GU
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      NR_NC
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Demolished
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Unusual
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                       Unwanted
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Landmark
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Total Point
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Total Cost
                      </StyledTableCell>
                      <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                     Avg Cost
                     </StyledTableCell>
                     <StyledTableCell align="left" style={{ color: "#242021", fontWeight: 'bold', }}>
                      Attendence
                     </StyledTableCell>
                     </TableRow>
                    </TableHead>

              
                     <TableBody>
                     {/* {console.log(this.state.rows)} */}
                     {rows.map((row, idx) => (
                     <StyledTableRow key={row.name} >
                       <StyledTableCell align="left" style={{ color: "#242021", }}>
                    {row.name}
                    </StyledTableCell>
                    <StyledTableCell  >{row.calories}</StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.fat}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {row.protein}
                    </StyledTableCell>
                    <StyledTableCell>{row.calories}</StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.fat}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {row.protein}
                    </StyledTableCell>
                    <StyledTableCell>{row.calories}</StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.fat}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {row.protein}
                    </StyledTableCell>
                    <StyledTableCell>{row.calories}</StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.fat}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ color: "#242021" }}>
                    {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
            </>
              
               </div>
               <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              >
              <div
                className={classes.paginationalign}
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  item
                  xs={12}
                  alignItems="flex"
                  justifyContent="center"
                >
                  <Pagination    alignItems="center"
                    justifyContent="center" 
                    
                  
                    count={10} variant="outlined" shape="rounded" />
                </Grid>
              </div>
              
               </Grid>
             
            </div>
            </>
       
        );
}