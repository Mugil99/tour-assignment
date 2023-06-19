import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loading from './Components/Loading';
import TourList from './Components/TourList';

function App() {
  const[load,setLoad]=useState(true);
  return (
    <div>
      {
        load &&
        <Loading setLoad={setLoad}/>
      }
      {
        (load!=true)&&
        <TourList load={load}/>
      }
    </div>
  );
}

export default App;
