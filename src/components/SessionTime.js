import "./SessionTime.css";




const SessionTime = ({className, value}) => {
  return (
    <div className="sessionTime">
      <h2>Session Length</h2>
      <h2 className={className}>{value}</h2>
    </div>
  );
};




export default SessionTime;