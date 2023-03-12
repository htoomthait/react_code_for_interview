import React from 'react'
import { Box, Typography, TextField, Button, styled } from '@mui/material'

const Container = styled(Box)`
  display: flex;
  flex-direction:column;
  & > h5, & > div, & > button {
    margin-top: 30px;
  }
`

const NewTransaction = () => {
  return (
    <Container>
      <Typography variant="h5"> New  Trsanctoin</Typography>
      <TextField label="Enter Expnese"/>
      <TextField label="Enter Amount"/>
      <Button variant="contained"> Add Transaction</Button>
    </Container>
  )
}

export default NewTransaction