import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="/home" element = {<CountriesList/>} />
        <Route>404</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
