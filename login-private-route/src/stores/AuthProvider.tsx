import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthProviderProps {
    children : React.ReactNode;
}

// Define an interface for the AuthContext type
interface AuthContextType {
    isAuthenticated: boolean;
    login: (accessToken: string) => void;
    logout: () => void;
    currentPrvateURI : string;
    memorizeCurrentPrivateURI: (uri : string) => void;
  }

// Create AuthContext with the correct type, providing default values
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
    currentPrvateURI : "",
    memorizeCurrentPrivateURI: () => {}
  });

export const AuthProvider : React.FC<AuthProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPrvateURI, setCurrentPrvateURI] = useState("");

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

      
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, currentPrvateURI, memorizeCurrentPrivateURI }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);