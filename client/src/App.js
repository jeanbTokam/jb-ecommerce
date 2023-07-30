import logo from './logo.svg';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Homescreen />} exact />
        <Route path='/product/:id' element={<Productdescscreen />}  />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
