import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";
import { useLocation } from 'react-router-dom'
import { IconButton, Stack, Box, AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Nav(props) {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (page) => {
    setOpen(false);
    navigate(page);
  }

  return (
    <>
      <Drawer 
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            marginTop:"55px" ,
            height:"11vh",
            backgroundColor: "#3d405b",
            opacity:"0.9",
            scrollbar: "none",
          }
        }}
      >
        <List sx={{display:"inline-flex"}}>
          <ListItem button>
            <div className={"mobile-t4 mobile-menu-item " + (location.pathname === "/" ? "mobile-menu-item-active" : "")} onClick={() => go('/')}>
              HOME
            </div>
          </ListItem>
          <ListItem button>
            <div className={"mobile-t4 mobile-menu-item " + (location.pathname === "/about" ? "mobile-menu-item-active" : "")} onClick={() => go('/about')}>
              ABOUT
            </div>
          </ListItem>
          <ListItem button>
            <div className={"mobile-t4 mobile-menu-item " + (location.pathname === "/work" ? "mobile-menu-item-active": "")} onClick={() => go('/work')}>
              WORK
            </div>
          </ListItem>
          <ListItem button>
            <div className={"mobile-t4 mobile-menu-item " + (location.pathname === "/contact" ? "mobile-menu-item-active" : "")} onClick={() => go('/contact')}>
              CONTACT
            </div>
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "#f4f1de" }} position="fixed">
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "'Noto Sans', sans-serif", fontWeight: "bold" }}
              color="#3d405b"
              onClick={() => navigate('/')}
            >
              YEYEH CHEN
            </Typography>
            <IconButton
              size="large"
              edge="start"
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: "#3d405b" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  )

}

export default Nav;