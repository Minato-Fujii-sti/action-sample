import React, { useState } from "react";

const ComponentTest = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const onSubmit = () => {
    setText('');
    setDisplayText(text);
  }

  return (
    <div style={{textAlign: 'center', marginTop: '20px'}} data-testid="mainbox">
      <textarea data-testid="main_input" value={text} onChange={(e) => setText(e.target.value)}/>
      <div data-testid="result_area">{displayText}</div>
      <div>
        <button data-testid="submit_button" onClick={onSubmit} disabled={text === ""}>OK</button>
      </div>
    </div>
  );
};

export default ComponentTest;