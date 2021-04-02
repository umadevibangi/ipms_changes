import React, { useState, Fragment } from 'react'
import { fade, makeStyles ,withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import UserTable from './UserTable'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Navbar from "../../components/navbar"
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
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
const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'Admin',state :false },
		{ id: 2, name: 'Craig', username: 'User',state :false },
		{ id: 3, name: 'Ben', username: 'User',state :false },
	]

	const initialFormState = { id: null, name: '', username: '',state:'' }

	// Setting state
	const [state, setState] = useState(true);

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username,state })
	}

	const updateUserstatus = (Currentuser) => {
    // setState(true);
   console.log(Currentuser)
   
   Currentuser.state=!Currentuser.state
   console.log(Currentuser)
   setUsers(users.map(user => (user.id === Currentuser.id ? Currentuser : user)))
   console.log(users)
  
			// setUsers(users.map(user => (user.id === Currentuser.id ? user.state: !Currentuser.state)))
	}

	const classes = useStyles();
	return (
		<>
		<Navbar/>
		

		
			
		        <div className={classes.paper1} style={{border: '1px ',borderRadius: '9px'}}>

					{editing ? (
						<Fragment>
					    <Grid container justify="flex-start" alignItems="flex-start">
                          <Typography className={classes.datadownloadhead} variant="h5" noWrap>
                            Edit user   
							</Typography>
                        </Grid>	                    
						    <EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
						<Grid container justify="flex-start" alignItems="flex-start">
                            <Typography className={classes.datadownloadhead} variant="h5" noWrap>
                            Add user   
							</Typography>   
						</Grid>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
			
				</div>

				<div className={classes.paper1} style={{border: '1px ',borderRadius: '9px'}}>
				    <Grid container justify="flex-start" alignItems="flex-start">

				<Typography className={classes.datadownloadhead} variant="h5" noWrap>
                View users   </Typography>
                </Grid>
				    <UserTable users={users} editRow={editRow} deleteUser={deleteUser}  updateUserstatus={updateUserstatus}/>
			
			    </div>
	
		</>
	)
}

export default App