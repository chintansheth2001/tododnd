import { DRAG_AND_DROP_CARD, ADD_TODO, REMOVE_TODO } from "./ActionType";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newState = {
        ...state,
        todo: [...state.todo, { id: Date.now(), title: action.payload }],
      };
      return newState;
    }
    case REMOVE_TODO: {
      const newState = {
        ...state,
        todo: [...state.todo],
        completed: [...state.completed],
      };
      const index = newState[action.payload.col].findIndex(
        (item) => item.id === action.payload.id
      );
      newState[action.payload.col].splice(index, 1);

      return newState;
    }

    case DRAG_AND_DROP_CARD: {
      const { source, destination, draggableId } = action.payload;
      const newState = {
        ...state,
        todo: [...state.todo],
        completed: [...state.completed],
      };
      let sourceCol = newState[source.droppableId];
      let destinationCol = newState[destination.droppableId];
      let draggedTodo = sourceCol.find((i) => i.id.toString() === draggableId);

      if (source.droppableId === destination.droppableId) {
        sourceCol.splice(source.index, 1);
        sourceCol.splice(destination.index, 0, draggedTodo);
      } else {
        sourceCol.splice(source.index, 1);
        destinationCol.splice(destination.index, 0, draggedTodo);
      }

      return newState;
    }

    default:
      throw new Error();
  }
}
