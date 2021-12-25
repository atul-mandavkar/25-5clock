import Wrapper from "./components/Wrapper";
import Wrapper2 from "./components/Wrapper2";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import BreakTime from "./components/BreakTime";
import SessionTime from "./components/SessionTime";
import Arrow from "./components/Arrow";
import TimerClock from "./components/TimerClock";
import TimerScreen from "./components/TimerScreen";
import TimerButton from "./components/TimerButton";
import TimerHeading from "./components/TimerHeading";
import TimerNumber from "./components/TimerNumber";
import ButtonPlay from "./components/ButtonPlay";
import ButtonPause from "./components/ButtonPause";
import ButtonReset from "./components/ButtonReset";
import React, {useState} from "react";


const zeroTo59 = (arg1) => {
  if(Number(arg1) === -1){
   return "59"; 
  }
  return arg1;
};
const lessThan10 = (arg1) => {
  if(Number(arg1) < 10){
    return ("0" + String(arg1));
  }
  return arg1;
};

function App() {
  let [tValue, setTValue] = useState({
    sessionT: 25,
    breakT: 5,
    timeVal: "25:00",
    timeHeading: "SESSION",
    startOrNot: 0
  });
  const incSession = () => {
    if(window.interval1){
      clearInterval(window.interval1);
    }
    if(tValue.sessionT < 60){
      setTValue({
        ...tValue,
        sessionT: Number(tValue.sessionT)+1,
        timeVal:
          tValue.sessionT < 9
          ? "0" + String(tValue.sessionT+1)+":00"
          : String(tValue.sessionT+1)+":00",
        timeHeading: "SESSION",
        startOrNot: 0
      });
    }
  };
  const decSession = () => {
    if(window.interval1){
      clearInterval(window.interval1);
    }
    if(tValue.sessionT > 1){
      setTValue({
        ...tValue,
        sessionT: Number(tValue.sessionT)-1,
        timeVal:
          tValue.sessionT <= 10
          ? "0" + String(tValue.sessionT-1)+":00"
          : String(tValue.sessionT-1)+":00",
        timeHeading: "SESSION",
        startOrNot: 0
      });
    }
  };
  const incBreak = () => {
    if(window.interval1){
      clearInterval(window.interval1);
    }
    if(tValue.breakT < 60){
      setTValue({
        ...tValue,
        breakT: Number(tValue.breakT)+1,
        tempTimeVal:
          tValue.breakT < 9
          ? "0" + String(tValue.breakT+1)+":00"
          : String(tValue.breakT+1)+":00",
        timeHeading: "SESSION",
        startOrNot: 0
      });
    }
  };
  const decBreak = () => {
    if(window.interval1){
      clearInterval(window.interval1);
    }
    if(tValue.breakT > 1){
      setTValue({
        ...tValue,
        breakT: Number(tValue.breakT)-1,
        tempTimeVal:
          tValue.breakT <= 10
          ? "0" + String(tValue.breakT-1)+":00"
          : String(tValue.breakT-1)+":00",
        timeHeading: "SESSION",
        startOrNot: 0
      });
    }
  };
  const startClock = () => {
    let minVal, secVal, min2, sec2;
    if(tValue.startOrNot === 0){
      minVal = Number(tValue.sessionT);
      secVal = 0;
      min2 = Number(tValue.breakT);
    }
    else{
      let x = document.getElementsByClassName("timerNumber")[0].innerHTML;
      //console.log("x is "+x);
      let arr1 = x.split(":");
      minVal = Number(arr1[0]);
      secVal = Number(arr1[1]);
      if(document.getElementsByClassName("timerHeading")[0].innerHTML==="SESSION"){
        min2 = Number(tValue.breakT)
      }
      else{
        min2 = Number(tValue.sessionT)
      }
    }
    sec2 = 0;
    //console.log(minVal+" "+secVal);
    //console.log(min2+" "+sec2);
    //console.log(lessThan10(minVal));
    //console.log(zeroTo59(minVal)); 
    clockFunct(minVal, secVal, min2, sec2);
    document.getElementsByClassName("buttonPlay")[0].style.display = "none";
    document.getElementsByClassName("buttonPause")[0].style.display = "block";
    setTValue({
      ...tValue,
      startOrNot: tValue.startOrNot + 1
    });
    
  };
  
const clockFunct = (arg1, arg2, arg3, arg4) => {
  let mArg1 = arg1, mArg2 = arg2, mArg3 = arg3, mArg4 = arg4;
  if(Number(arg1) < 1){
    document.getElementsByClassName("timerHeading")[0].style.color = "red";
    document.getElementsByClassName("timerNumber")[0].style.color = "red";
  }
  else{
    document.getElementsByClassName("timerHeading")[0].style.color = "white";
    document.getElementsByClassName("timerNumber")[0].style.color = "white"
  }
  let heading = document.getElementsByClassName("timerHeading")[0].innerHTML;
  // Here use window.interval1 to declare interval1 globally so it can be use to clear intervel frem another function
  window.interval1 = setInterval(()=>{
    arg2--;
    arg2 = zeroTo59(arg2);
    if(Number(arg2) === 59){
      arg1--;
    }
    arg1 = zeroTo59(arg1);
    if(Number(arg1) < 1){
      document.getElementsByClassName("timerHeading")[0].style.color = "red";
      document.getElementsByClassName("timerNumber")[0].style.color = "red";
    }
    document.getElementsByClassName("timerNumber")[0].innerHTML = lessThan10(String(arg1))+":"+lessThan10(String(arg2));
    
    if(Number(arg1) < 1 && Number(arg2) < 1){
      //console.log("this finished");
      clearInterval(window.interval1);
      if(heading === "SESSION"){
        document.getElementsByClassName("timerHeading")[0].innerHTML= "BREAK";
        //console.log("break");
      }
      else{
        document.getElementsByClassName("timerHeading")[0].innerHTML= "SESSION";
        //console.log("session");
      }
      //console.log("values are "+ mArg3 + " "+ mArg4 + " " +mArg1+" " + mArg2);
      // this is remaining
      document.getElementsByClassName("audioPlay")[0].play();
      clockFunct(String(mArg3), String(mArg4), String(mArg1), String(mArg2));
    }

  },50);
};
const pauseClock = () => {
  clearInterval(window.interval1);
  let capt1 = document.getElementsByClassName("timerHeading")[0].innerHTML;
  let capt2 = document.getElementsByClassName("timerNumber")[0].innerHTML;
  setTValue({
    ...tValue,
    timeVal: capt2,
    timeHeading: capt1
  });
  document.getElementsByClassName("buttonPause")[0].style.display = "none";
  document.getElementsByClassName("buttonPlay")[0].style.display = "block";
};
const resetClock = () => {
  if(window.interval1){
    clearInterval(window.interval1);
  }
  document.getElementsByClassName("timerHeading")[0].style.color = "white";
  document.getElementsByClassName("timerNumber")[0].style.color = "white"
  document.getElementsByClassName("buttonPause")[0].style.display = "none";
  document.getElementsByClassName("buttonPlay")[0].style.display = "block";
  setTValue({
    ...tValue,
    sessionT: 25,
    breakT: 5,
    timeHeading: "SESSION",
    timeVal: "25:00",
    startOrNot: 0
  });
};

  return (
    <Wrapper>
      <h1>25 + 5 clock</h1>
      <Wrapper2>
        <LeftSide>
          <Arrow className="fas fa-arrow-down" onClick={decBreak}></Arrow>
          <BreakTime value={tValue.breakT}></BreakTime>
          <Arrow className="fas fa-arrow-up" onClick={incBreak}></Arrow>
        </LeftSide>
        <MiddleSide>
          <TimerClock>
            <TimerScreen>
              <TimerHeading value={tValue.timeHeading}></TimerHeading>
              <TimerNumber value={tValue.timeVal}></TimerNumber>
            </TimerScreen>
            <TimerButton>
              <ButtonPlay onClick={startClock}></ButtonPlay>
              <ButtonPause onClick={pauseClock}></ButtonPause>
              <ButtonReset onClick={resetClock}></ButtonReset>
            </TimerButton>
          </TimerClock>
        </MiddleSide>
        <RightSide>
          <Arrow className="fas fa-arrow-down" onClick={decSession}></Arrow>
          <SessionTime value={tValue.sessionT}></SessionTime>
          <Arrow className="fas fa-arrow-up" onClick={incSession}></Arrow>
        </RightSide>
      </Wrapper2>
    </Wrapper>
  );
}

export default App;
