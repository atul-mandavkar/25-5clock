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

const d = new Date();

function App() {
  
  let [tValue, setTValue] = useState({
    sessionT: 25,
    breakT: 5,
    timeVal: "25:00"
  });
  const incSession = () => {
    setTValue({
      ...tValue,
      sessionT:
        tValue.sessionT === 59
        ? 0
        : Number(tValue.sessionT)+1
    });
  };
  const decSession = () => {
    setTValue({
      ...tValue,
      sessionT:
        tValue.sessionT === 0
        ? 59
        : Number(tValue.sessionT)-1
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
              <TimerHeading value="session"></TimerHeading>
              <TimerNumber value={tValue.timeVal}></TimerNumber>
            </TimerScreen>
            <TimerButton>
              <ButtonPlay></ButtonPlay>
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
