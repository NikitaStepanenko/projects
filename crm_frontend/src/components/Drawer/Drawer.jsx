// import React from 'react';

// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import { Link, NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [side]: open });
//   };

//   const sideList = side => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         <ListItem button key="Home">
//           <Link to="/">Home</Link>
//         </ListItem>

//         <ListItem button key="Users">
//           <Link to="/users">Users</Link>
//         </ListItem>

//         <ListItem button key="Projects">
//           <NavLink to="/projects">Projects</NavLink>
//         </ListItem>
//         {/* {['Home', 'Users', 'Projects'].map((text, index) => (
//           <ListItem button key={text}>
//             <Link to="/">Home</Link>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))} */}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer('left', true)}>
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//           color="inherit"
//           aria-label="open drawer"
//         >
//           <MenuIcon />
//         </IconButton>
//       </Button>
//       <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
//         {sideList('left')}
//       </Drawer>
//     </div>
//   );
// }

// // <ul className={styles.NavBar}>
// // //     //   <li>
// // //     //     <Link to="/">Home</Link>
// // //     //   </li>
// // //     //   <li>
// // //     //     <NavLink to="/users">Users</NavLink>
// // //     //   </li>
// // //     //   <li>
// // //     //     <NavLink to="/projects">Projects</NavLink>
// // //     //   </li>
// // //     // </ul>
