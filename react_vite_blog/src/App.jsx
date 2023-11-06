
import './App.css'
import Login from './pages/Login'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  )
}

export default App
