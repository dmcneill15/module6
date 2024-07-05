import { useState } from "react";

export function UpdateEmoji() {

    const [emoji, setEmoji] = useState('😊');

    //happy
    //sad
    //inLove

    const changeMood = () => {
        let newEmoji = emoji;
        if (emoji == '😊')
            newEmoji = '☹';
        else if (emoji == '☹')
            newEmoji = '😍';
        else if (emoji == '😍')
            newEmoji = '😊';

        setEmoji(newEmoji);
    }

    return (
        <div className="emojiChanger">
            <div>
            <span role="img" aria-label="happy">{emoji}</span>
            </div><br></br>

            <button onClick={changeMood}>Change Mood</button>
        </div>
    )
}