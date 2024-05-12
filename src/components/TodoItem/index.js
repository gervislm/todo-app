import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

export function TodoItem({ completed, text, onComplete, onEdit, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={onComplete} />

      <p className={`TodoItem-text ${completed && "TodoItem-text--complete"}`}>
        {text}
      </p>

      <EditIcon onEdit={onEdit} />

      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}
