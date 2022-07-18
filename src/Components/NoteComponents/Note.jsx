import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function Note(props) {

  // console.log(props.star)

  return (
    <div className="note">
      <div className="note__body">{props.text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
       
       
          <DeleteForeverIcon
            className="note__delete"
            aria-hidden="true"
            onClick={() => props.deleteHandler(props.id)}
          ></DeleteForeverIcon>
         <div onClick={() => props.starHandler(props.id)}>
          {props.star ? <StarIcon></StarIcon> : <StarBorderIcon></StarBorderIcon>}
        </div>

      </div>
    </div>
  );
}
export default Note;