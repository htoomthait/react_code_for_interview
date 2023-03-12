import React from 'react'
import { Box, Typography, Divider, styled, List} from '@mui/material'
import Transaction from './Transaction'

const Container = styled(Box)`
    
`

const Transactions = ({transactions}) => {
  return (
    <Container>
        <Typography variant="h5">Transaction History</Typography>
        <Divider/>
        <List>
            {
                transactions.map(transaction => (
                   <Transaction transaction={transaction} />
                ))
            }
        </List>
    </Container>
  )
}

export default Transactions