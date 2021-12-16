import Wrapper from "./components/Wrapper";
import Wrapper2 from "./components/Wrapper2";
import LeftSide from "./components/LeftSide";
import MiddleSide from "./components/MiddleSide";
import RightSide from "./components/RightSide";
import BreakTime from "./components/BreakTime";
import SessionTime from "./components/SessionTime";
import Arrow from "./components/Arrow";

function App() {
  return (
    <Wrapper>
      <h1>25 + 5 clock</h1>
      <Wrapper2>
        <LeftSide>
          <Arrow className="fas fa-arrow-down"></Arrow>
          <BreakTime></BreakTime>
          <Arrow className="fas fa-arrow-up"></Arrow>
        </LeftSide>
        <MiddleSide>middle</MiddleSide>
        <RightSide>
          <Arrow className="fas fa-arrow-down"></Arrow>
          <SessionTime></SessionTime>
          <Arrow className="fas fa-arrow-up"></Arrow>
        </RightSide>
      </Wrapper2>
    </Wrapper>
  );
}

export default App;
