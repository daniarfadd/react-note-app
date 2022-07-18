import { React } from "react";
import LinearProgress from "@mui/material/LinearProgress";
function CreateNote(props) {


  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        maxLength="100"
        onChange={props.textHandler}
        value={props.inputText}
      ></textarea>
      <div className="note__footer">
        <span className="label"> left {100 - props.inputText.length}</span>
        <button className="note__save" onClick={props.saveHandler}>Save</button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={100 - props.inputText.length}
      />
    </div>
  );
}
export default CreateNote;