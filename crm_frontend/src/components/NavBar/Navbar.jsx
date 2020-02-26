// import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import TemporaryDrawer from '../Drawer/Drawer';

// const useStyles = makeStyles(theme => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
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
//     width: theme.spacing(7),
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
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: 200,
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = event => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static">
//         <Toolbar>
//           {/* <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//             <MenuIcon /> */}
//           <TemporaryDrawer />
//           {/* </IconButton> */}
//           <Typography className={classes.title} variant="h6" noWrap>
//             Material-UI
//           </Typography>

//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="secondary">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton aria-label="show 17 new notifications" color="inherit">
//               <Badge badgeContent={17} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }

// // import React from 'react';
// // //import { Link, NavLink, withRouter } from 'react-router-dom';
// // import styles from './NavBar.module.css';
// // import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// // import Link from '@material-ui/core/Link';

// // function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
// //   event.preventDefault();
// //   console.info('You clicked a breadcrumb.');
// // }

// // function Navbar() {
// //   return (
// //     <Breadcrumbs aria-label="breadcrumb">
// //       <Link color="inherit" to="/" onClick={handleClick}>
// //         Home
// //       </Link>
// //       <Link color="inherit" to="/users" onClick={handleClick}>
// //         Users
// //       </Link>
// //       <Link
// //         color="textPrimary"
// //         to="/projects"
// //         onClick={handleClick}
// //         aria-current="page"
// //       >
// //         Projects
// //       </Link>
// //     </Breadcrumbs>
// //     // return (
// //     //   <div>
// //     // <ul className={styles.NavBar}>
// //     //   <li>
// //     //     <Link to="/">Home</Link>
// //     //   </li>
// //     //   <li>
// //     //     <NavLink to="/users">Users</NavLink>
// //     //   </li>
// //     //   <li>
// //     //     <NavLink to="/projects">Projects</NavLink>
// //     //   </li>
// //     // </ul>
// //     //   </div>
// //     // );
// //   );
// // }

// // export default Navbar;
import React from 'react';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* <ListItem button key="Home">
            <Link to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            </Link>
            <Link to="/">
              <ListItemText primary={'Home'} />
            </Link>
          </ListItem> */}
          <Link to="/">
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>

          <Link to="/users">
            <ListItem button key="Users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={'Users'} />
            </ListItem>
          </Link>

          <Link to="/projects">
            <ListItem button key="Projects">
              <ListItemIcon>
                <DeveloperBoardIcon />
              </ListItemIcon>
              <ListItemText primary={'Projects'} />
            </ListItem>
          </Link>

          {/* {['Home', 'Users', 'Projects'].map((text, index) => (
          <ListItem button key={text}>
            <Link to="/">Home</Link>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}
