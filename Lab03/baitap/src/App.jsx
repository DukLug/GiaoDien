import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bai2Result, setBai2Result] = useState(0) 
  function bai1() {
    const inputValue = document.getElementById('bai1input').value;
    console.log(inputValue);
  }

  function bai2() {
    const dropdown = document.getElementById('dropdown').value;
    const a = parseFloat(document.getElementById('bai2a').value);
    const b = parseFloat(document.getElementById('bai2b').value);
    let c = 0;
    if(dropdown === "+"){
      c = a + b;
    }
    else if(dropdown === "-"){
      c = a - b;
    }
    else if(dropdown === "*"){
      c = a * b;
    }
    else if(dropdown === "/"){
      c = a / b;
    }
    setBai2Result(c)
  }

  return (
    <>
      <div style={{ background: '#ecf0f1', padding: '5px', margin: '5px', flex: 1 }}>
        <h1 style={{ color: 'black', fontSize: '24px' }}>Bai 1</h1>
        <input placeholder="Input" id="bai1input" name="bai1input" />
        <div className="card">
          <button onClick={() => bai1()}>
            Log console
          </button>
        </div>
      </div>
      <div style={{ background: '#ecf0f1', padding: '5px', margin: '5px' }}>
        <h1 style={{ color: 'black', fontSize: '24px' }}>Bai 2</h1>
        <input placeholder="a" id="bai2a" name="bai2a" />
        <div style={{ margin: '5px' }}>
          <select 
            id="dropdown" 

            style={{ padding: '5px', fontSize: '16px' }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <input placeholder="b" id="bai2b" name="bai2b" />
        <div>
        <h1 id="result" style={{ color: 'black', fontSize: '24px' }}>Result: {bai2Result}</h1>
        </div>
        <div className="card">
          <button onClick={() => bai2()}>
            Calculate
          </button>
        </div>
      </div>
      <div style={{ background: '#ecf0f1', padding: '5px', margin: '5px'}}>
        <h1 style={{ color: 'black', fontSize: '24px' }}>Bai 3</h1>
        <h1 style={{ color: 'black', fontSize: '24px' }}>To do list</h1>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '5px'}}>
            <h1 style={{ color: 'black', fontSize: '24px' }}>Create Note</h1>
            <input placeholder="noteName" id="noteName" name="noteName" />
            <input
              placeholder="noteContent"
              id="noteContent"
              name="noteContent"
              style={{ height: '100px' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '5px' }}>
            <input placeholder="noteName" id="noteName" name="noteName" />
            <input
              placeholder="noteContent"
              id="noteContent"
              name="noteContent"
              style={{ height: '100px' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '5px' }}>
            <input placeholder="noteName" id="noteName" name="noteName" />
            <input
              placeholder="noteContent"
              id="noteContent"
              name="noteContent"
              style={{ height: '100px' }}
            />
          </div>
        </div>
        

        <div className="card">
          <button onClick={() => bai1()}>
            Create note
          </button>
        </div>
      </div>
    </>
  )
}

export default App
