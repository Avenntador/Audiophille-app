import './App.scss';
import Home from './pages/Home/Home';
import Earphones from './pages/Earphones/Earphones';
import Headphones from './pages/Headphones/Headphones';
import Speakers from './pages/Speakers/Speakers';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductItem from './pages/ProductItem/ProductItem';

function App() {
  return (
    <div className="App">
      {/* <ProductItem /> */}
      {/* <Home /> */}
      <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/headphones' element={<Headphones />}/>
            <Route path='/speakers' element={<Speakers />}/>
            <Route path='/earphones' element={<Earphones />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
