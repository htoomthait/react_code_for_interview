import React from 'react'
import { Box, Typography, Divider, styled, List} from '@mui/material'
import Transaction from './Transaction'

const Container = styled(Box)`
    
`

const Transactions = ({transactions, deleteTran}) => {
  return (
    <Container>
        <Typography variant="h5">Transaction History</Typography>
        <Divider/>
        <List>
            {
                transactions.map(transaction => (
                   <Transaction 
                      transaction={transaction} 
                      key={transaction.id}
                      deleteTran={deleteTran}
                    />
                ))
            }
        </List>
    </Container>
  )
}

export default Transactions