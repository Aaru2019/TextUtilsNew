import React, { useState } from "react";


export default function Textarea(props) {
    const [Text, setText] = useState("Enter Your Text Here")

    const upClick = () => {
        let a = Text.toUpperCase();
        setText(a);
    }

    const loClick = () => {
        let a = Text.toLowerCase();
        setText(a);
    }
    
    const onChanges = (event) => {
        setText(event.target.value)
    }

    return (
        <div style={props.modebtn === 'dark' ? { backgroundColor: 'white' } : { backgroundColor: '#19351e' }}>
        <div className="container">
                <h1 style={props.modebtn ==='dark'? {color: 'black'} : {color : 'white'}}> Enter a text to Analyze Below</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                        style={props.modebtn ==='dark'? {color: 'black', backgroundColor : 'white'} : {color : 'white', backgroundColor : '#61434385'}}
                        value={Text}
                        onChange={onChanges}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-danger" onClick={upClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-danger mx-3" onClick={loClick}>Convert to LowerCase</button>
        </div>
        </div>
    );
}
