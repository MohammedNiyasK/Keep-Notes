import React, { useEffect, useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import axios from "../axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    const fetchData = async () => {
      await axios.post("/api/v1/notes/new", {
        title: note.title,
        content: note.content,
      });
    };

    fetchData();

    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [isClick, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  };

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          onClick={handleClick}
        />

        {isClick ? (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            onClick={handleClick}
            rows="3"
          />
        ) : (
          ""
        )}

        {isClick ? (
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default CreateArea;
