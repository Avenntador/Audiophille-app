import './App.scss';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductItem from './pages/ProductItem/ProductItem';
import CategoryPage from './pages/CategoryPage/CategoryPage';

function App() {
  return (
    <div className="App">
      {/* <ProductItem /> */}

      <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/headphones' element={<CategoryPage  categoryType={'headphones'}/>}/>
            <Route path='/speakers' element={<CategoryPage  categoryType={'speakers'}/>}/>
            <Route path='/earphones' element={<CategoryPage  categoryType={'earphones'}/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
