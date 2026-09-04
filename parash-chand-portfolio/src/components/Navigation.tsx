import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [
  ['Home', 'home'],
  ['Expertise', 'expertise'],
  ['Certificate', 'history'],
  ['Projects', 'projects'],
  ['Contact', 'contact']
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#0b0f19', height: '100%', color: '#fff' }}>
      <p className="mobile-menu-top" style={{ padding: '15px 0', fontSize: '1.2rem', fontWeight: 600, color: '#b794ff' }}>
        <ListIcon style={{ verticalAlign: 'middle', marginRight: '8px' }}/>Menu
      </p>
      <Divider sx={{ borderColor: '#1e2638' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center', 
                py: 2,
                '&:hover': {
                  color: '#0b0f19',
                  backgroundColor: '#b794ff',
                  boxShadow: '0 0 25px #b794ff'
                }
              }} 
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} primaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        component="nav" 
        id="navigation" 
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`} 
        sx={{ 
          background: scrolled ? 'rgba(11, 15, 25, 0.95)' : 'transparent', 
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none', 
          transition: 'all 0.3s ease' 
        }}
      >
        <Toolbar className='navigation-bar' sx={{ justifyContent: 'flex-end', padding: '1rem 9%' }}>
          
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '1.5rem' }}>
            {navItems.map((item) => (
              <Button 
                key={item[0]} 
                onClick={() => scrollToSection(item[1])} 
                sx={{ 
                  color: '#b794ff', 
                  fontSize: '1.6rem', 
                  textTransform: 'none', 
                  fontWeight: 600,
                  padding: '0.8rem 1.6rem',
                  borderRadius: '3rem',
                  border: '0.2rem solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#0b0f19',
                    backgroundColor: '#b794ff',
                    borderColor: '#b794ff',
                    boxShadow: '0 0 25px #b794ff',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { sm: 'none' }, 
              color: '#fff',
              transition: '0.3s ease',
              '&:hover': {
                color: '#b794ff',
                boxShadow: '0 0 15px #b794ff'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0b0f19', color: '#fff' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;