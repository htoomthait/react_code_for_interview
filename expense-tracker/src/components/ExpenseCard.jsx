import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
  }
`

const ExpenseCard = ({transactions}) => {


  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0)).toFixed(2);
  


  return (
    <Container>

      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color : `green`}}>+{income}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color : `red`}}> {expense}</Typography>
        </CardContent>
      </Card>


    </Container>
  )
}

export default ExpenseCard