import './App.css';
import Comments from './pages/Comments';
import  {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<p>Welcome page</p>} />
         <Route path='/comments' element={<Comments />} />
         <Route path='/comments/:commentId' element={<Comment />} />
       </Routes>
    </div>
  );
}

export default App;
