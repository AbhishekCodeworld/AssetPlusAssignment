import './App.css';
import ContentGalary from './components/ContentGalary.js';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import AddPost from './components/AddContent.js';

function App() {
//const history = useNavigate();

  const AddPostButtonClick = () =>{
    //history.push('/addPost');
  }
  return (
    <div>
      <button className='AddPostButton' onClick={AddPostButtonClick}>AddPost</button>
          <h1>Content Gallery</h1>
          <ContentGalary/>
    </div>
    /*<Router>
    <div>
      <Routes>
        <Route path='/addPost'>
          <addPost/>
        </Route>
        
        <Route path='/'>
          <button className='AddPostButton' onClick={AddPostButtonClick}>AddPost</button>
          <h1>Content Gallery</h1>
          <ContentGalary/>
        </Route>
      
      </Routes>
    </div>
    </Router>*/
    
  );
}

export default App;
