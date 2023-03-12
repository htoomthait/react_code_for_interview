import { Button, ListItem, ListItemText, styled } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
    margin-top: 10px;

`

const Transaction = ({transaction, deleteTran}) => {
  
    const color =  transaction.amount > 0 ? 'Green' : 'Red';

  return (
    <Detail style={{ backgroundColor : `${color}`, color : `#fff`}}> 
        <ListItemText>
            <DeleteIcon onClick={(e) => { e.preventDefault(); deleteTran(transaction.id); } } />
        </ListItemText>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
        
    </Detail>
  )
}

export default Transaction