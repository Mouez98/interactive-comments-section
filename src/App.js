// import {Routes, Route} from 'react-router-dom'
import './App.css';
// import Replies from './components/comments/replies/Replies';
import Comments from './components/comments/Comments';


function App() {
  return (
    <div className="App">
       <Comments /> 
       {/*
       // Add It Later //
       <Routes>
         <Route path='/' element={<Comments />} />
         <Route path='*' element={<p>Not found</p>} />
         <Route path='comments' element={<Comments />} >
           <Route path=':commentId' element={<p>Comment</p>} >
             <Route path='replies' element={<Replies />} />
           </Route>
           <Route path='add' element={<p>add</p>} />
         </Route>
       </Routes> */}
    </div>
  );
}

export default App;
