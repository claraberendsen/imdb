import React, { Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import { ErrorPage } from './pages/ErrorPage';
import { AuthContext } from './context/Auth';
import { Home } from './pages/Home';
import { Login } from './pages/Login';


function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  return (
    
    <div className="App">
      <Suspense fallback={<ErrorPage />}>
      <AuthContext.Provider value={{authenticated, setAuthenticated : (val: boolean) => setAuthenticated(val) }}>
        {authenticated ? <Home /> : <Login />
      }
      </AuthContext.Provider>
      </Suspense>
    </div>
  );
}


export default App;
