import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Login from './component/Login';
import Footer from './component/Footer';
import Detail from './pages/Detail/Detail';

function App() {
  // console.log(apiFun.MvList())
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/tv' element={<Movies/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/detail' element={<Detail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
