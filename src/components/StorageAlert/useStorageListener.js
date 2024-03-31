import React from "react";

function useStorageListener(synchronize) {
  const [StorageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODO_BACKUP") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronize();
    setStorageChange(false);
  };

  return { show: StorageChange, toggleShow };
}

export { useStorageListener };
