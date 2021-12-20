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
  if(Number(arg1) === 0){
   return "59"; 
  }
  return arg1;
};
const lessThan10 = (arg1) => {
  if(Number(arg1) <= 10){
    return ("0" + String(arg1));
  }
};

function App() {
  
  let [tValue, setTValue] = useState({
    sessionT: 25,
    breakT: 5,
    timeVal: "25:00",
    timeHeading: "SESSION"
  });
  const incSession = () => {
    setTValue({
      ...tValue,
      sessionT:
        tValue.sessionT === 59
        ? 0
        : Number(tValue.sessionT)+1,
      timeVal:
        tValue.sessionT === 59
        ? "00:00" /* To put 00:00 after 59:00 */
        : tValue.sessionT < 9
        ? "0" + String(tValue.sessionT+1)+":00"
        : String(tValue.sessionT+1)+":00"
    });
  };
  const decSession = () => {
    setTValue({
      ...tValue,
      sessionT:
        tValue.sessionT === 0
        ? 59
        : Number(tValue.sessionT)-1,
      timeVal:
        tValue.sessionT === 0
        ? "59:00" /* To put 59:00 after 00:00 */
        : tValue.sessionT <= 10
        ? "0" + String(tValue.sessionT-1)+":00"
        : String(tValue.sessionT-1)+":00"
    });
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
    do{
      secVal--;
      console.log(secVal);
    }while(minVal !== 0);
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
