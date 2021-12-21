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
const clockFunct = (arg1, arg2) => {
  arg1 = Number(arg1);
  arg2 = Number(arg2);
  arg1 = zeroTo59(arg1);
  arg2 = zeroTo59(arg2);
  console.log("minutes "+ arg1);
  console.log("seconds "+ arg2);
  let interval1 = setInterval(()=>{
    arg2--;
    arg2 = zeroTo59(arg2);
    if(arg2 === "59"){
      //console.log("[]][][ " +arg2);
      arg1--;
    }
    arg1 = zeroTo59(arg1);
    if(Number(arg1) === 0){
      document.querySelector(".timerNumber").style.color = "red";
      document.querySelector(".timerHeading").style.color = "red";
    }
    document.getElementsByClassName("timerNumber")[0].innerHTML = lessThan10(String(arg1))+":"+lessThan10(String(arg2));
    //console.log(arg1 + " "+typeof arg1+" "+arg2 + " "+typeof arg2);
    
    if(Number(arg1) === 0 && Number(arg2) === 0){
      console.log("finished");
      clearInterval(interval1);
    }

  }, 250);
};
/*
do{
      do{
        //console.log("== "+ secVal);
        secVal = Number(secVal - 1);
        secVal = zeroTo59(secVal);
        console.log(lessThan10(minVal)+":"+lessThan10(secVal));
        setTValue({
          ...tValue,
          timeVal: lessThan10(minVal)+":"+lessThan10(secVal)
        });
      }while(secVal !== 0);
      if(secVal === 0){
        minVal = zeroTo59(Number(minVal - 1));
        //console.log("minutes = "+minVal);
        //console.log(minVal === "59");
      }
    }while(minVal !== "59");
*/

function App() {
  
  let [tValue, setTValue] = useState({
    sessionT: 1,
    breakT: 5,
    timeVal: "01:00",
    timeHeading: "SESSION",
    chSession: true
  });
  const incSession = () => {
    if(tValue.sessionT < 60){
      setTValue({
        ...tValue,
        sessionT: Number(tValue.sessionT)+1,
        timeVal:
          tValue.sessionT < 9
          ? "0" + String(tValue.sessionT+1)+":00"
          : String(tValue.sessionT+1)+":00"
      });
    }
  };
  const decSession = () => {
    if(tValue.sessionT > 1){
      setTValue({
        ...tValue,
        sessionT: Number(tValue.sessionT)-1,
        timeVal:
          tValue.sessionT <= 10
          ? "0" + String(tValue.sessionT-1)+":00"
          : String(tValue.sessionT-1)+":00"
      });
    }
  };
  const incBreak = () => {
    if(tValue.breakT < 60){
      setTValue({
        ...tValue,
        breakT: Number(tValue.breakT)+1
      });
    }
  };
  const decBreak = () => {
    if(tValue.breakT > 1){
      setTValue({
        ...tValue,
        breakT: Number(tValue.breakT)-1
      });
    }
  };
  const startClock = () => {
    let arr1 = tValue.timeVal.split(":");
    let minVal = Number(arr1[0]);
    let secVal = Number(arr1[1]);
    console.log(minVal);
    console.log(secVal);
    //console.log(lessThan10(minVal));
    //console.log(zeroTo59(minVal));
    if(tValue.chSession){
      clockFunct(minVal, secVal);
      setTValue({
        ...tValue,
        chSession: !(tValue.chSession)
      });
    }

// Use setInterval , first different function with this do while method and then call it in set interval  In do while reduce sec to -1 and when sec is 0 then reduce minutes by -1    
    
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
              <ButtonPause></ButtonPause>
              <ButtonReset></ButtonReset>
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
