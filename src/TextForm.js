import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const onClick = () => {
        let updatedText = text.toUpperCase();
        setText(updatedText);
    }

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div className="container">
            <div>
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange={onChange} value={text} id="FormTextArea" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mt-2" onClick={onClick} >SAVE</button>
        </div>
        <div className="container">
            <h1>Feedback Summary</h1>
            <span>{text.split(" ").length - 1} Words {text.length} Characters</span>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
