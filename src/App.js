import { Routes, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Body';

function App() {
  return (
    <div className='container mx-auto'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;