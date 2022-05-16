import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './componentes/SignIn';
import Home from './componentes/Home';

function App() {
  return (
    <div className='App'> 
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        {/* <Route path='*' element=""/> Cuando hay un path que no estan en los routes */}
      </Routes>
    </Router>
      </div>
    
  );
}

export default App;