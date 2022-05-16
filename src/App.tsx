import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './componentes/SignIn';
import Home from './componentes/Home';

function App() {
  return (
    // <Router>
    // <div className='App'>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/signin' element={<SignIn/>}/>
    //   </Routes>
    // </div>
    // </Router>
      <>
        <Home></Home>
      </>
  );
}

export default App;