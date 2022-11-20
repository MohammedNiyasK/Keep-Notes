import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "../axios";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
    console.log(props.id);
    const fetchData = async () => {
      await axios.post("/api/v1/notes/delete", {
        _id: props.id,
      });
    };

    fetchData();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
