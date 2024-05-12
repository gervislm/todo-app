import React from "react";
import { TodoIcon } from ".";

export function EditIcon({ onEdit }) {
  return <TodoIcon type="edit" color="gray" onClick={onEdit} />;
}
