import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Drawer } from'../sidebar/Drawer';




export const SideBar = ({user, toggleDrawer, open}) => {



  return (

    <Drawer variant="permanent" open={open}>
      <h3>{user}</h3>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            lists
            <Divider sx={{ my: 1 }} />
            lists
          </List>
    </Drawer>
  )
}
