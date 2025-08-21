/** https://www.telerik.com/blogs/react-basics-working-react-objects */

import react, {useState} from "react";

export default function AudioSynthesizer({audioFile}) {
    let audio = new Audio(audioFile);

    const start = () => {
        audio.play();
    }

    return (
        < div >
            {/* <button onClick={start}>Play Audio</button> */}
            <audio controls src={audioFile}>
                Your browser does not support the audio element.
            </audio>
        </div >
    );
}
