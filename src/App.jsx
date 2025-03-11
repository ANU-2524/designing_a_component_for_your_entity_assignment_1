
import './App.css';
import Usercard from './components/usercard.jsx';
import {Route, Routes} from 'react-router-dom';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Usercard/>}/>
    </Routes>
    </>
  );
}

export default App;
