import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthProviderProps {
    children : React.ReactNode;
}

// Define an interface for the AuthContext type
interface AuthContextType {
    isAuthenticated: boolean;
    login: (accessToken: string) => void;
    logout: () => void;
    currentPrivateURI : string;
    memorizeCurrentPrivateURI: (uri : string) => void;
    activePage : string;
    memoActivePage : (page : string) => void;
  }

// Create AuthContext with the correct type, providing default values
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
    currentPrivateURI : "",
    memorizeCurrentPrivateURI: () => {},
    activePage : "",
    memoActivePage : () => {}
    
  });

export const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPrvateURI, setCurrentPrvateURI] = useState("");
    const [activePage, setActivePage] = useState("");

    useEffect(() => {
        const token =  localStorage.getItem('access_token');
        if (token) {
          setIsAuthenticated(true);
        }
      }, [setIsAuthenticated]);

      useEffect(() => {
        const currentPrivateUri = localStorage.getItem('current_privae_uri');
        if(currentPrivateUri){
            setCurrentPrvateURI(currentPrivateUri);
        }
        

      }, [setCurrentPrvateURI])

   

      
    
      const login = (accessToken : string) => {
        localStorage.setItem('access_token', accessToken);
        setIsAuthenticated(true);
      };
    
      const logout = () => {
        localStorage.removeItem('access_token');
        setIsAuthenticated(false);
      };

      const memorizeCurrentPrivateURI = (uri : string) => {
        localStorage.setItem('current_privae_uri', uri)
        setCurrentPrvateURI(uri);
      }

      const memoActivePage = (page : string) => {
        setActivePage(page);
      }

      
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, currentPrivateURI: currentPrvateURI, memorizeCurrentPrivateURI, activePage, memoActivePage }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);