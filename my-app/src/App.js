
import { useState } from 'react';
import './App.css';
import TipTap from './components/TipTap';
import parser from 'html-react-parser'

function App() {
   const [desc,setDescription]=useState('')
  return (
    <div className="App">
      <TipTap setDescription={setDescription}/>
      <div className='ProseMirror'>
          {parser(desc)}
      </div>

    </div>
  );
}

export default App;
