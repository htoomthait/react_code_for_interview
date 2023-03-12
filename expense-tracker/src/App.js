import './App.css';
import { Component, useState} from 'react';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';


const Header = styled(Typography)`
  /* margin: 10px 0; */
  font-size:  36px;
  color:blue;
`

const CComponent = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    padding:10px;
    width: 50%;
    height: 70vh;
  }
`

function App() {
  
  const [transactions, setTransactions] = useState([
    { id : 1,  text :  'Memos',  amount : -20 },
    { id : 1,  text :  'Salary',  amount : 3000 },
    { id : 1,  text :  'Book',  amount : -100 },
    { id : 1,  text :  'Bonus',  amount : 1500 },
  ]);

  return (
    <div className="App">
        <Header > Expense Tracker</Header>
        <CComponent>
            <Box>
              <Balance />
              <ExpenseCard />
              <NewTransaction />
            </Box>
            <Box>
              <Transactions transactions={transactions} />
            </Box>
        </CComponent>
    </div>
  );
}

export default App;
