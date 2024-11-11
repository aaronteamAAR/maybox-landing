import { Routes, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Body';
import Aboutbody from './pages/About';

function App() {
  return (
    <div className='container mx-auto'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutbody />} />
      </Routes>
    </div>
  );
}

export default App;