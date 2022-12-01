import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and components
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/register"
              element={<Register />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
