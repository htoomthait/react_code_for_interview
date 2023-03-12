import { useState, useRef } from 'react'
import { Box, Typography, TextField, Button, styled } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';    

const Container = styled(Box)`
  display: flex;
  flex-direction:column;
  & > h5, & > div, & > button {
    margin-top: 30px;
  }
`

const NewTransaction = ({add}) => {
  const [text, setText]  = useState('');
  const [amount, setAmount] = useState('');
  

  const addTransaction = (e) => {
    e.preventDefault();
    const newTran = { id : uuidv4(), text : text, amount : +amount}   
    add(newTran);
    setText('');
    setAmount('');
    
  }


  return (
    <Container>
      <Typography variant="h5"> New  Trsanctoin</Typography>
      <TextField label="Enter Expnese" onChange={(e) => setText(e.target.value)} value={text} />
      <TextField label="Enter Amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
      <Button variant="contained" onClick={(e) => { addTransaction(e) }}> Add Transaction</Button>
    </Container>
  )
}

export default NewTransaction