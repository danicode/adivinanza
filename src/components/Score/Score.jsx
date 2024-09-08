import './styles.css';

export const Score = ({ score, highScore, hintText }) => {

  return (
    <div id="status">
      <div id="hint">
        <p id="hint-text">{ hintText }</p>                    
      </div>
      <div id="scoring">
        <div className="points"><span>Score: </span><span id="score">{ score }</span></div>
        <div className="points"><span>Highscore: </span><span id="highscore">{ highScore }</span></div>                    
      </div>                                
    </div>
  );
}
