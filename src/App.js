import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SingleUser from './pages/SingleUser';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<SingleUser/>} />
        
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
