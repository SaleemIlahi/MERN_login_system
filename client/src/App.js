
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
         < Route path="/" element={<Home />} />
         < Route path="/login" element={<Login />} />
         < Route path="/signup" element={<Signup />} />
         < Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
