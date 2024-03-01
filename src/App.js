import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
 
      </Routes>
    </Router>
  );
}


export default App;