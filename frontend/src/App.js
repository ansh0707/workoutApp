import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import axios from 'axios'

//pages & components
import Home from './pages/home'
import NavBar from './components/navbar'

import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  const { user } = useAuthContext()
  axios.post('workout-app-gamma-pearl.vercel.app')
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to="/login"/>}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
