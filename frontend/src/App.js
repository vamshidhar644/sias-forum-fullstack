import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to='/'/>} />
            <Route path="/signup" element={!user ? <Signup/> : <Navigate to='/'/>}/>
          </Routes> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
