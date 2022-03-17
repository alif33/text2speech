import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { text } from './constant';
const Speech = () => {
const [value, setValue] = React.useState(text);
const { speak } = useSpeechSynthesis();
return (
	<div className="speech">
        <div className="group">
            {value}
        </div>
        <div className="group">
            <button onClick={() => speak({ text: value })}>
            Speech
            </button>
        </div>
	</div>
);
};
export default Speech;
