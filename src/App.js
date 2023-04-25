import './App.css';

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Head from './components/head';
import Home from './components/home';
import About from './components/about';
import Hobby from './components/hobby';
import Contact from './components/contact';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Head/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/hobby' element={<Hobby/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;