import React from "react";

const Result =({word, example, sounds})=>{

    return(
        <div className="result_section">
            <h1 className="mainResult">{word}</h1>
            {sounds!==''?
                <audio id="voiceResult" controls src={`https://www.linguee.de/mp3/${sounds}.mp3`}>
                </audio>:''
            }
            
            {example !== ''?
            <div className="example_sentence">
                <h3>example sentense</h3>
                <p>source : {example.source}</p>
                <p>target : {example.target}</p>
            </div>:''
            
            }
            </div>
        )
}


export default Result;