import { RecoilRoot } from 'recoil'
import './App.css'
import Login from './pages/Login'
import Blog from './pages/Blog'
import DataGridDemo from './pages/DataGridDemo'
import { Container } from '@mui/material'
import ServerPaginationGrid from './pages/ServerPaginationGrid'


function App() {
  

  return (
    <RecoilRoot>
        {/* <Login /> */}
        {/* <Blog /> */}
        <Container maxWidth="lg"> 
          {/* <DataGridDemo /> */}
          
          <ServerPaginationGrid />

        </Container>
        
    </RecoilRoot>
      
  )
}

export default App
