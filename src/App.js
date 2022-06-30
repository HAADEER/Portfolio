import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './component/counter';
import Navbar from './component/navbar/navbar';

import { BrowserRouter , Route , Routes} from 'react-router-dom' ;
import About from './pages/about/about';
import Home from './pages/home/home';
import Products from './pages/product/products';
import ItemProduct from './pages/product/itemProduct';
import Todo from './pages/todo/todo';
function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ItemProduct/>}/>
        <Route path='/todo' element={<Todo/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
