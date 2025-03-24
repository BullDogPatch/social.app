import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreatePostPage from './pages/CreatePostPage';
import PostPage from './pages/PostPage';
import CreateCommunitytPage from './pages/CreateCommunity';

function App() {
  return (
    <div className='max-h-screen bg-black text-gray-700 transition-opacity duration-700 pt-20'>
      <Navbar />
      <div className='container mx-auto px-4 py-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreatePostPage />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/community/create' element={<CreateCommunitytPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
