import React,{useState} from "react";

const Text = () => {
    const [text, setText] = useState("Enter text here")

   const upCase = () => {
       setText(text.toUpperCase());
    };
   const loCase = () => {
       setText(text.toLowerCase());
    };
   const handelChange = (event) => {
      setText(event.target.value);
    };

    const copyText = () => {
    var copyText = document.getElementById("copyText");
    // copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
    }

  return (
    <>
      <div className="container mt-5">
      <h1>Enter the text here :</h1>
        <textarea id="copyText" value={text} onChange={handelChange} className="form-control" cols="30" rows="15"></textarea>
        <button onClick={copyText} type="button" className="btn btn-dark my-2"><i class="far fa-copy"></i> Copy text</button>
        <div>
        <button onClick={upCase} type="button" className="btn btn-dark my-4">To Upper Case</button>
        <button onClick={loCase} type="button" className="btn btn-dark my-4 mx-4">To Lower Case</button>
        </div>
      </div>
    </>
  );
};

export default Text;
