import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked : " +text)
    let newText = text.toUpperCase();
    // setText('You have clicked on handleUpClick')
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("Onchanged")
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here');
  //text = "new text"; Wrong way to change the state
  //setText("new Text"); Correct way to change the state
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
