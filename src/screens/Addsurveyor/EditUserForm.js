import React, { useState, useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Navbar from "../../components/navbar"
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import { fade, makeStyles ,withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)
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
	const classes = useStyles();
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <div className={classes.paper} style={{border: '1px ',borderRadius: '9px'}}>
             <Grid container direction="row" spacing={3}>
			 <Grid item md={4} xs={12}>
			<OutlinedInput
              type="text" name="name" value={user.name} onChange={handleInputChange}                // id="outlined-basic"
                // value={surveyorName}
                // onChange={e => setSurveyorName(e.target.value)}  
                placeholder="Surveyor name"
                // onChange={handleChange}
                //   value={state.password}
                //   onChange={handleChange} 
                variant="outlined"
                className={classes.TextField}
                    
            />
			</Grid>
			<Grid item md={4} xs={12}>
			<Select
                      
                     name="username" value={user.username} onChange={handleInputChange}					 //   onChange={e => setSurveyorType(e.target.value)}
 
					   // onChange={handleSurveyor}
					   className={classes.TextField}
					   displayEmpty
					   variant="outlined"
				   
					   inputProps={{ 'aria-label': 'Without label' }}
					 //   inputProps={{ 'aria-label': 'Without label' }}
					   
					 >
						 <MenuItem value="">
			 <em>Select surveyor type</em>
		   </MenuItem>
			<MenuItem value="Admin">Admin</MenuItem>
		   <MenuItem value="User">User</MenuItem>
		 
			 
				 
				 </Select>
				 </Grid>
				 <Grid item md={2} xs={12}>
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
			
			  type="submit"
			  value="submit"
            
              >Update Surveyor</Button>
			  </Grid>
        <Grid item md={2} xs={12}>
				 <Button style={{
               marginTop: "0.1px",

            //    margin: "0 0 20px 0",
               width: "100%",
               height: "49px",
               background: "#C5D4DF",
               backgroundRepeat: "no-repeat",
               borderRadius: "8px",
               opacity: "1",
               letterSpacing: "0px",
               color: "#242021",
               fontSize: "16px",
               textTransform: "none",
               "&:active": {
                 backgroundColor: "#C5D4DF",
                 color: "#242021",
               },
               "&:hover": {
                 backgroundColor: "#C5D4DF",
                 color: "#242021",
               },
              }}
            
              margin="Dense" 
			
			 
        onClick={() => props.setEditing(false)}
            
              >cancel</Button>
			  </Grid>
			  </Grid>
			  </div>
        
      {/* <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button> */}
    </form>
  )
}

export default EditUserForm