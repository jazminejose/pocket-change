import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../Assets/small_logo.png'
import './NavBar.css'

const pages = ['Budget', 'Reports', 'Logout'];
const pagesLink = ['/Budget', '/Reports', '/Login']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar className="nav" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img className='pictureNav' src={Logo} alt='logo'></img>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
              
                className='dropDown'
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                
              >
                <MenuIcon  />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}

                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none'},
                }}
              >
                <MenuItem style={{ backgroundColor: "#2a2e30" }} onClick={(e) => {
                  e.preventDefault();
                  window.location = '/Budget';
                }}>
                    <Typography textAlign="center">Budget</Typography>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "#2a2e30" }} onClick={(e) => {
                  e.preventDefault();
                  window.location = '/Report';
                }}>
                  <Typography textAlign="center">Report</Typography>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "#2a2e30" }}>
                  <Typography textAlign="center" onClick={(e) => {
                    e.preventDefault();
                    window.location = '/';
                  }}>Logout</Typography>
                  </MenuItem>
                
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <img className='pictureNav' src={Logo} alt='logo'></img>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              
                <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location = '/Budget';
                }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Budget
                </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location = '/Report';
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Report
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.location = '/';
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Logout
              </Button>

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip  title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
              
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem style={{ backgroundColor: "#2a2e30" }} key={setting} onClick={handleCloseUserMenu}>
                    <Typography style={{ backgroundColor: "#2a2e30" }} textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
