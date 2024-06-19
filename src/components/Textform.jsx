import { useState } from "react";
import PropTypes from 'prop-types';

function Textform(props){
  const [text,setText] = useState('');
  const Moveuptext = (event)=>{
    event.preventDefault();// Prevent default form submission behavior
    setText(prevText=>prevText.toUpperCase());
    props.showAlert(' Sentances are Converted to Upper Case','success');
  }
  const Movelowertext = (event)=>{
    event.preventDefault();// Prevent default form submission behavior
    setText(prevText=>prevText.toLowerCase());
    props.showAlert(' Sentances are Converted to Lower Case','success');
  }
  
  const clearText = (event)=>{
    event.preventDefault();
    setText('');
  }

  const reverseText = (event)=>{
    event.preventDefault();
    const reversedText=text.split('').reverse().join('');
    setText(reversedText);
    props.showAlert(' Sentances are Reversed','success');
  }

  const handleonChange = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}}>
        <form>
          <div className="mb-3">
            <h2>{props.header}</h2>
            <textarea name="myBox" id="myBox" cols="30" rows="10" className="form-control" style={{backgroundColor:props.mode==='light'?'white':'gray',border:props.mode==='light'?'2px solid black':'2 px solid white',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleonChange}></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary" onClick={Moveuptext}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={Movelowertext}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={reverseText}>Reverse</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear</button>
        </form>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text===""?0:text.trim().split(/\s+/).length} words,{text.split(" ").join("").length} characters are present inside it.</p>
          <p>Time Required to read this is {0.008*(text.split(" ").length-1)}</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:'Enter text in the above text area to preview here'}</p>
        </div>
      </div>
    </>
  )
}

Textform.propTypes = {
  header:PropTypes.string.isRequired
};

Textform.defaultProps = {
  header:"Enter your Text here:"
};

export default Textform;