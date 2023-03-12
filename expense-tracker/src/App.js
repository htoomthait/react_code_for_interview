import './App.css';
import { useState} from 'react';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import { v4 as uuidv4 } from 'uuid';    


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
    { id : uuidv4(),  text :  'Memos',  amount : -20 },
    { id : uuidv4(),  text :  'Salary',  amount : 3000 },
    { id : uuidv4(),  text :  'Book',  amount : -100 },
    { id : uuidv4(),  text :  'Bonus',  amount : 1500 },
  ]);

  const addTransaction = (tran) => {
    setTransactions(prevState => [...prevState, tran]);
  }
  
  const deleteTransaction = (id) => {
    let filteredTransactions = transactions.filter(item => item.id !== id);
    setTransactions(filteredTransactions);
  }


  return (
    <div className="App">
        <Header > Expense Tracker</Header>
        <CComponent>
            <Box>
              <Balance transactions={transactions} />
              <ExpenseCard transactions={transactions}/>
              <NewTransaction add={addTransaction}/>
            </Box>
            <Box>
              <Transactions transactions={transactions} deleteTran={deleteTransaction} />
            </Box>
        </CComponent>
    </div>
  );
}

export default App;
