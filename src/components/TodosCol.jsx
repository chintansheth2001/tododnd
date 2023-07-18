import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DRAG_AND_DROP_CARD } from "./ActionType";
import TodoCard from "./TodoCard";
import { AppContext } from "./AppContext";

const TodosCol = () => {
  const [state, dispatch] = React.useContext(AppContext);
  const { todo, completed } = state;

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    dispatch({ type: DRAG_AND_DROP_CARD, payload: result });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="todoColOuter">
        <Droppable droppableId={"todo"}>
          {(provided) => (
            <div className="todoCol">
              <div className="todoColInner" ref={provided.innerRef} {...provided.droppableProps}>
                <h3>Todo</h3>
                {todo.map((item, index) => (
                  <TodoCard
                    key={item.id}
                    item={item}
                    col={"todo"}
                    index={index}
                  />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId={"completed"}>
          {(provided) => (
            <div className="todoCol">
              <div className="todoColInner" ref={provided.innerRef} {...provided.droppableProps}>
                <h3>Completed</h3>
                {completed.map((item, index) => (
                  <TodoCard
                    key={item.id}
                    item={item}
                    col={"completed"}
                    index={index}
                  />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TodosCol;
