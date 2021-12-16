import "./BreakTime.css";




const BreakTime = ({className, value}) => {
  return (
    <div className="breakTime">
      <h2>Break Length</h2>
      <h2 className={className}>{value}</h2>
    </div>
  );
};




export default BreakTime;