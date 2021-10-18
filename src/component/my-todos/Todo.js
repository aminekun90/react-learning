import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import classes from "./Todo.module.css";
function Todo(props) {
  const [showModal, setShowModal] = useState(false);
  function deleteHandler() {
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div className={classes.card}>
      <h2>{props.text}</h2>
      <div className={classes.actions}>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
