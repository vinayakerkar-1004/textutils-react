import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked : " +text)
    let newText = text.toUpperCase();
    // setText('You have clicked on handleUpClick')
    setText(newText);
  }

  const handleLoClick = () => {
    // console.log("Lowercase was clicked : " +text)
    let newText = text.toLowerCase();
    // setText('You have clicked on handleUpClick')
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = ('');
    setText(newText);
  }

  const handleCopy = () => {
    console.log("I am Copy");
    navigator.clipboard.writeText(text);
  }

  const handleOnChange = (event) => {
    // console.log("Onchanged")
    setText(event.target.value);
  }

  const handleExtraSpaces = () => {
    let newTask = text.split(/[ ]+/);
    setText(newTask.join(" "))
  }

  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  //text = "new text"; Wrong way to change the state
  //setText("new Text"); Correct way to change the state
  return (
    <>
    <div className="contaniner">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" className="form-label">
          Example textarea
        </label> */}
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value = {text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-danger mx-1 " onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1" onClick= {() => setIsBold(!isBold)}>Toggle Bold</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p style={{ fontWeight: isBold ? 'bold' : 'normal' }}>
  {text}
</p>
    </div>
    </>
  );
}
