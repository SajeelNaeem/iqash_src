import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/images/transparent.png'
import { Link } from 'react-router-dom';




const pages = [
  {page: 'Home', route: '/'},
  {page: 'Products', route: '/products'},
  {page: 'Pricing', route: '/pricing'}
]

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color='inherit' position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((p) => (
                <MenuItem key={p.page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={p.route} style={{ textDecoration: 'none' }}> {p.page } </Link>  
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((p) => (
              <Link to={p.route} style={{ textDecoration: 'none' }}>
                <Button
                  key={p.page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'primary', display: 'block' }}
                >
                  {p.page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
                component="img"
                sx={{
                height: 64,
                }}
                alt="iQASH_logo"
                src={logo}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
