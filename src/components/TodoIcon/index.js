import { ReactComponent as CheckSVG } from "./icons/check.svg";
import { ReactComponent as EditSVG } from "./icons/edit.svg";
import { ReactComponent as DeleteSVG } from "./icons/delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  edit: (color) => <EditSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

export function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}
