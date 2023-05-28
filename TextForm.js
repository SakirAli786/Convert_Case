import React, {useState} from 'react';


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("UpperCase was click"+ Text);
    let newText=Text.toUpperCase();
    
    setText(newText);
  
  }
  const handleloClick=()=>{
    console.log("UpperCase was click"+ Text);
  
    let oldText=Text.toLowerCase();
  
    setText(oldText)
  }
  const handleonChange=(event)=>{
    console.log(handleonChange);
    setText(event.target.value);
    
  }
 
  
  const [Text,setText] = useState("");

  return (
    <>
    <div className='container'>
      <h1>{props.h}</h1>
      <div className="form-floating my-3">
     
  <textarea className="form-control" placeholder="Leave a comment here" value={Text} onChange={handleonChange} id="floatingTextarea" ></textarea>
  
</div>
<button className="btn btn-warning mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-danger mx-1" onClick={handleloClick}>Convert to Lowercase</button>




      
    </div>
    <div className="container my-3" >
<h1>Your text summary</h1>
<p>{Text.split(" ").length} word and {Text.length} character</p>
    </div>
    </>
  )
}
