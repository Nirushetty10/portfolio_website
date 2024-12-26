import * as React from 'react';
import PropTypes from 'prop-types';

import {Box, AppBar,Toolbar,Button,Container,Typography,MenuItem, Drawer,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAME } from '../utils/const-information';

function Nav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: '#fff',
          backgroundImage: 'none',
          borderBottom : '1px solid black',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{px: '0 !important'}}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                px: '0 !important',
              }}
            >
              <Typography variant="body1" color="#2C363F" sx={{
                fontSize:'20px',
                fontWeight:800,
                fontFamily:"Karla"
              }}>
                  {NAME}
                  </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                onClick={() => scrollToSection('home')}
                >
                  <Typography variant="body2" color="#2C363F" fontWeight={800} fontFamily="Karla">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('Resume')}
                >
                  <Typography variant="body2" color="#2C363F" fontWeight={800} fontFamily="Karla">
                    Resume
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('Projects')}
                >
                  <Typography variant="body2" color="#2C363F" fontWeight={800} fontFamily="Karla">
                    Projects
                  </Typography>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => scrollToSection('plans')}
                >
                  <Typography variant="body2" color="#2C363F" fontWeight={800} fontFamily="Karla">
                    Plans
                  </Typography>
                </MenuItem> */}
                {/* <MenuItem
                  onClick={() => scrollToSection('faq')}
                >
                  <Typography variant="body2" color="#2C363F" fontWeight={800} fontFamily="Karla">
                    FAQ
                  </Typography>
                </MenuItem> */}
              </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px', color: '#2C363F' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>
                  <MenuItem onClick={() => scrollToSection('home')}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('Resume')}>
                    Resume
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('Projects')}>
                    Projects
                  </MenuItem>
                  {/* <MenuItem onClick={() => scrollToSection('plans')}>
                    Plans
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem> */}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

Nav.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired
};

export default Nav;