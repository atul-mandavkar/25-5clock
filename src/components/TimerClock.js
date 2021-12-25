import "./TimerClock.css";




const TimerClock = ({children}) => {
  return (
    <div>
      <div className="timerClock">{children}</div>
      <audio className="audioPlay" src="../audios/SCHOOL BELL SOUND.mp3"></audio>
    </div>
  );
};



export default TimerClock;