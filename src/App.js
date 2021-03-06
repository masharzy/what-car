import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Notfound from './components/Notfound/Notfound';
import Blogs from './components/Blogs/Blogs';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/:id' element={<Blog/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default App;
