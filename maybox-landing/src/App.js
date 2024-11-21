import { Routes, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Body';
import Aboutbody from './pages/About';
import Vendors from './pages/Vendors';
import Vendorfeedback from './pages/Vendorfeedback'
import Blog from "./pages/BlogLayout"
import Post from "./pages/blogs/post"

function App() {
  return (
    <div className='container mx-auto'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutbody />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendorfeedback" element={<Vendorfeedback />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;