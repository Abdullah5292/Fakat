import React, { useState } from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../fakat logo white.png'; // Import logo image
import { Link, useHistory } from 'react-router-dom'; // Import Link and useHistory for React Router navigation

const pages = ['Lockers', 'Reviews', 'Pricing']; // Updated page names
const settings = ['Profile', 'Account', 'Dashboard']; // Settings options

const theme = createTheme({
    palette: {
        primary: {
            main: '#800000', // Change this to your desired color
        },
        secondary: {
            main: '#EED7C5', // Change this to your desired color
        },
    },
    typography: {
        h6: {
            color: '#ffffff', // Change this to your desired color
        },
    },
});

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication
    const history = useHistory(); // Hook for programmatic navigation

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

    const handleLogin = () => {

        setIsLoggedIn(true); // Update isLoggedIn state
        handleCloseNavMenu(); // Close menu after login
    };



    const handleLogout = () => {
        setIsLoggedIn(false); // Update isLoggedIn state
        handleCloseUserMenu(); // Close user menu after logout
    };

    const handleProtectedLinkClick = (event, link) => {
        if (!isLoggedIn) {
            event.preventDefault(); // Prevent default navigation
            history.push('/signin'); // Redirect to sign-in page
        } else {
            history.push(link); // Navigate to the protected page
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={logo} alt="Logo" style={{ width: 40, height: 'auto', marginRight: 8 }} />

                        <a href="/landing" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                FAKAT
                            </Typography>
                        </a>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* Updated navigation buttons */}
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    component={Link} // Use Link component from React Router
                                    to={`/${page.toLowerCase()}`} // Generate dynamic route
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {isLoggedIn ? (
                                // Show user menu if logged in
                                <>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
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
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}

                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                        <MenuItem onClick={handleLogout}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                // Show login button if not logged in
                                <Button color="inherit" onClick={handleLogin}>
                                    Login
                                </Button>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>

    );

} export default Navbar;
