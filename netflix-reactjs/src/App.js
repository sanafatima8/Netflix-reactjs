
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Account from './pages/Account';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
    <AuthContextProvider>
 <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/account'
     element={ 
    <ProtectedRoute>
     <Account/>
    </ProtectedRoute> } />

  </Routes>
    </AuthContextProvider>
   
       
    </>
  );  
}

export default App;
