// useState is a React hook
//useState returns value and setValue
import { useState } from "react";

// save in MoodChanger.jsx
export function MoodChanger() {
    // two variables :
    // mood stores current mood, default happy
    // setMood is a function for updating mood
    const [mood, setMood] = useState('happy');

    return (
        <div className="MoodChanger componentBox">
            <div>Current Mood: {mood}</div>

            <button onClick={()=>setMood('tired')}>Stayed Up Late</button>
            <button onClick={function(){setMood('hunrgy')}}>Lunch Time</button>
        </div>
    )
}

//Creates state updater funcitons
//eg. Use for shopping cart updates
export function MoodChangerFunctions(){
    const [mood, setMood] = useState('happy');

    // Calls setMood with a fixed value of 'ecstatic'
    // begin with 'handle' prefix by convention
    function handleWinLotto(){
        setMood('Really Happy!');
    }

    // Calls setMood with a conditional state value
    const handleRunningLate = () =>{
        let newMood = 'stressed';
        if(mood == 'stressed')
            newMood = 'Really stressed'
        else if(mood == 'Really stressed')
            newMood = "Back to bed";

        setMood(newMood);
    }

    return(
        <div className="MoodChanger componentBox">
            <div>Current Mood: {mood}</div>

            <button onClick={handleWinLotto}>Win the Lotto</button>
            <button onClick={handleRunningLate}>Running Late</button>
        </div>
    )
}
