import React from 'react';
import {Box, styled, Typography} from '@mui/material';

const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
`

const Balance = ({transactions}) => {
  
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((subTotal, item) => (subTotal += item), 0).toFixed(2);

  return (
    <Box>
        <BalanceText>  Balance : {total}      </BalanceText>
    </Box>
  )
}

export default Balance;