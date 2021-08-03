import marked from 'marked';
import React, {useState} from 'react';
import './App.scss'; 
import {PREVIEW} from './preview'

function App() {
  const [markdown, setMarkdown] = useState(PREVIEW);

  const displayText = (event) =>{
    setMarkdown(event.target.value)
  }

  return (
    
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div id="container">
        <div id="left-container">
          <h4>Editor</h4>
          <textarea id="editor" onChange={(event)=>displayText(event)}>{PREVIEW}</textarea>
        </div>
        <div id="right-container">
          <h4>Previewer</h4>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {breaks:true})}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
