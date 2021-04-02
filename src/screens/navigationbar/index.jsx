// import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
// import GetAppIcon from '@material-ui/icons/GetApp';
// import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
// import Tooltip from '@material-ui/core/Tooltip';
// import BasicTable from "../table"
// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     fontWeight: 'bold',
//       color:"#692495",
//       fontSize:"bold",
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//      color:"#692495",
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     color:"#692495",
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   tooltipsize:{
//     maxWidth:" 100%"
//   }
// }));

// export default function PrimarySearchAppBar(props) {
//   const classes = useStyles();

//   const [data, setData] = React.useState({
    
//     value: -1,
   
//   });
//   const handleNavigate = () => {
//     /*console.log(this.props.navigateTo(url));*/
//    props.navigateTo("/table");
//   };
// //   const  handleNavigate = event => {
// //     setData({
// //       ...data,
// //       value: value
// //     });
// //   };
//   return (
//     <div className={classes.grow}>
//       <AppBar  position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
//         <Toolbar>
//           <Typography className={classes.title} variant="h5" noWrap>
//             IPMS_MOBILE
//           </Typography>
//           <div className={classes.grow} />
         
//           <Tooltip title="report" className={classes.tooltipsize} arrow>
//             <IconButton  >
            
//               <DescriptionOutlinedIcon
//                 fontSize="large"
              
            
//               />
             
//             </IconButton>
//             </Tooltip>
//             <Tooltip title="datadownload"className={classes.tooltipsize} arrow>

//             <IconButton   >
              
//                 <GetAppIcon     fontSize="large" />
        
//             </IconButton >
//             </Tooltip>
//             <Tooltip title="logout"  className={classes.tooltipsize} arrow>

//             <IconButton
            
//               edge="end"
              
//             >
//               <PowerSettingsNewIcon  fontSize="large"/>
//             </IconButton>
//             </Tooltip>
      
        
//             <IconButton
              
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
         
//         </Toolbar>
//       </AppBar>
//       {/* <div>{this.state.value === 1 ? <BasicTable /> : null}</div> */}
//         {/* <div>{this.state.value === 2 ? <Marine /> : null}</div> */}
//     </div>
    
//   );
// }
