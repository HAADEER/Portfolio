import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './component/counter/counter';
import Navbar from './component/navbar/navbar';
import Regester from './pages/register/regester';
import { BrowserRouter , Route , Routes} from 'react-router-dom' ;
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
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ItemProduct/>}/>
        <Route path='/register' element={<Regester/>}/>
        <Route path='/todo' element={<Todo/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
