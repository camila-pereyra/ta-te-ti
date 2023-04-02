import "./ScoreBoard.css";

const ScoreBoard = ({ scoreX, scoreO }) => {
  return (
    <div className="score-board">
      <div className="scoreX">{scoreX}</div>
      <div className="scoreO">{scoreO}</div>
    </div>
  );
};

export default ScoreBoard;
