import './App.css';
import BlogList from './Components/BlogList';
import BlogDetails from './Components/BlogDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/blogDetails/:id' element={<BlogDetails />}/>
        <Route path='/blogList' element={<BlogList />}/>
        <Route path='/' element={<BlogList />}/>
      </Routes>
    </Router>
  );
}

export default App;
