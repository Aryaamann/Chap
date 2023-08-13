import './App.css';
import Form from './modules/form';
import Dashboard from './modules/dashboard/Dashboard';
import { Routes,Route,Navigate,useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';

const ProtectedRoute = ({children}) =>{
    const  isLoggedIn = localStorage.getItem('user:token')!==null;
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timeout);
    }, [location.pathname]);
  
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        </div>
      );
    }
  
    if (!isLoggedIn) {
      return <Navigate to={'/users/signin'} />;
    } else if (isLoggedIn && ['/users/signin', '/users/signup'].includes(location.pathname)) {
      return <Navigate to={'/'} />;
    }
  
    return children;
  };

  function App() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/signin"
          element={
            <ProtectedRoute>
              <Form isSignInPage={true} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/signup"
          element={
            <ProtectedRoute>
              <Form isSignInPage={false} />
            </ProtectedRoute>
          }
        />
      </Routes>
    );
  }
  
  export default App;
