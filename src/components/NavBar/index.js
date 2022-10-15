import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <MenuItem onClick={() => {
          navigate('/')
        }}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
          >
            Curso de React JS
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate('/departamentos')
          }}
        >
          <Typography textAlign="center">
            Departamentos
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            navigate('/departamentos/new')
          }}
        >
          <Typography textAlign="center">Add Departamentos</Typography>
        </MenuItem>
        <MenuItem>
          <Typography textAlign="center">Setup</Typography>
        </MenuItem>


        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </Box>

      </Toolbar>
    </AppBar>

  )

}

export default NavBar