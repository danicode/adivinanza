import './styles.css';

export const Result = ({ value }) => {

  return (
    <>
      <div id="wide-band"></div>
      <div className="result"><span id="result">{ value }</span></div>
    </>
  );
}
          