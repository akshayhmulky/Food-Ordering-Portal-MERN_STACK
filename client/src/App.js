import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

//components
import Navbar from './components/Navbar';

//pages
import Category from './pages/Category';
import Subcategory from './pages/Subcategory';
import Order from './pages/Order'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* place Navbar within BrowserRouter orelse we cannot use <Link to=""> inside Navbar component */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Category/>}/>
          <Route path="/category/:name" element={<Subcategory/>} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
