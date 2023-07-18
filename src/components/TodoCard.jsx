import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { REMOVE_TODO } from "./ActionType";
import { AppContext } from "./AppContext";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";

const TodoCard = ({ item, col, index }) => {
  const [state, dispatch] = React.useContext(AppContext);

  const onRemove = () => {
    dispatch({ type: REMOVE_TODO, payload: { id: item.id, col: col } });
  };
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className="card"
          id={item.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img src={Menu} alt="Drag" width={24} />
          <div className="cardTitle">{item.title}</div>
          <img
            className="deleteBtn"
            src={Close}
            alt="Remove"
            width={24}
            onClick={() => onRemove()}
          />
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;
