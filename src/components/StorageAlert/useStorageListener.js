import React from "react";

export function useStorageListener(synchronize) {
  const [StorageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODO_BACKUP_V1") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronize();
    setStorageChange(false);
  };

  return { show: StorageChange, toggleShow };
}
