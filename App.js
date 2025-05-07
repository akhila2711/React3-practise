import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';
import Log from './component/loginfunctional/loginfunctional/loginfunctional';
import Resume from './component/Resume/Resume';
import Todo from './component/todo/todo'; // Importing the Todo component

function App() {
  return (
    <>
      <Router>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/Login">Login</Link></li>
          <li> <Link to="/Registration">Registration</Link></li>
          <li> <Link to="/Log">Log</Link></li>
          <li> <Link to="/Resume">Resume</Link></li>
          <li> <Link to="/Todo">Todo</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<h1>Welcome to Home page</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Todo" element={<Todo />} /> {/* Updated to use Todo component */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
