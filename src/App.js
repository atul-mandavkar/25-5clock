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

function App() {
  return (
    <Wrapper>
      <h1>25 + 5 clock</h1>
      <Wrapper2>
        <LeftSide>
          <Arrow className="fas fa-arrow-down" onClick=""></Arrow>
          <BreakTime></BreakTime>
          <Arrow className="fas fa-arrow-up" onClick=""></Arrow>
        </LeftSide>
        <MiddleSide>
          <TimerClock>
            <TimerScreen>
              <TimerHeading value="session"></TimerHeading>
              <TimerNumber value="00:00"></TimerNumber>
            </TimerScreen>
            <TimerButton>
              <ButtonPlay></ButtonPlay>
              <ButtonPause></ButtonPause>
              <ButtonReset></ButtonReset>
            </TimerButton>
          </TimerClock>
        </MiddleSide>
        <RightSide>
          <Arrow className="fas fa-arrow-down" onClick=""></Arrow>
          <SessionTime></SessionTime>
          <Arrow className="fas fa-arrow-up" onClick=""></Arrow>
        </RightSide>
      </Wrapper2>
    </Wrapper>
  );
}

export default App;
