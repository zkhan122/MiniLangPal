/** https://www.telerik.com/blogs/react-basics-working-react-objects */

export default function AudioSynthesizer({audioFile}) {
    return (
        < div >
            {/* <button onClick={start}>Play Audio</button> */}
            <audio controls src={audioFile}>
                Your browser does not support the audio element.
            </audio>
        </div >
    );
}
