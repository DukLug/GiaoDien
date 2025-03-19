import { useReducer, useRef } from 'react';
import './App.css';
import Cau1 from './components/Cau1.jsx';
import Cau2 from './components/Cau2.jsx';


function App() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Cau1/>
      <Cau2/>
    </div>
  );
}

export default App;
