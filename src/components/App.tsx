import Mainpage from './Pages/Mainpage';
import Cartpage from './Pages/Cartpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/cart' element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
