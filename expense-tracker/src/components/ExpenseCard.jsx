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

const ExpenseCard = () => {
  return (
    <Container>

      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color : `green`}}>25</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color : `red`}}>15</Typography>
        </CardContent>
      </Card>


    </Container>
  )
}

export default ExpenseCard