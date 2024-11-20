import * as React from 'react';
import PropTypes from 'prop-types';

import {Box, AppBar,Toolbar,Button,Container,Typography,MenuItem, Drawer,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const logoStyle = {
  width: '75px',
  height: 'auto',
  cursor: 'pointer',
};

function Nav({ mode }) {
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
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          borderBottom : '1px solid black'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                px: 0,
              }}
            >
              <Typography variant="body1" color="text.primary" sx={{
                fontWeight: 700,
                fontSize:'20px',
              }}>
                    Niranjan ks.
                  </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('home')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('Our-services')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Our Services
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('ChooseUs')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Why Choose Us
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('plans')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Plans
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
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
                  <MenuItem onClick={() => scrollToSection('Our-services')}>
                    Our Services
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('ChooseUs')}>
                    Why Choose Us
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('plans')}>
                    Plans
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired
};

export default Nav;