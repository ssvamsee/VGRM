import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar></NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
