 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Register from './Components/Register'
import Navbar from './Components/Navbar';
import GetStudent from './Components/GetStudent'
import Get from './Components/Get'
import Get1 from './Components/Get1';

const App=()=> {
  return (
    <>
   
   <Navbar></Navbar>
  <Register></Register>
    <Get></Get>
   <Get1></Get1>
   
    </>
  );
}

export default App;
