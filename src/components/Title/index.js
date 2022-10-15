import React from 'react'
import Typography from '@mui/material/Typography'

const Title = ({ children }) => {
  return (
    <>
      <Typography
        variant='subtitle3'>
        &nbsp;
      </Typography>
      <Typography
        variant="h4"
        color="inherit"
        component="section"
      >
        {children}
      </Typography>
    </>
  )
}

export default Title