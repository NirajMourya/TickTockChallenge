import { useState,useRef } from "react";
import ResultModal from "./ResultModal";

export default  function TimerChallenge({ title , targetTime })
{
    const timer = useRef();
    const [timeStarted,setTimeStarted] = useState(false)
    const [timerExpired,setTimerExpired] = useState(false);
    
    function handleStart()
    {
        setTimeStarted(true)
        timer.current =setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000)
    }

    function handleStop()
    {
       clearTimeout(timer.current);
    }
    return (
        <>  
            { timerExpired && <ResultModal targetTime={targetTime} result="lost" />}     
            <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ?'s':''}
            </p>
            <p>
                <button onClick={timeStarted ? handleStop : handleStart}>
                    { timeStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className="">
                { timeStarted ? 'Time is running... ' : 'Timer inactive'}
            </p>
        </section>
       </>
    );
}