import React from "react";

function useLocalStorage(itemName, initValue) {
  const [syncedItems, setSyncedItem] = React.useState(true);
  const [item, setItem] = React.useState(initValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItem = initValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        setSyncedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [syncedItems]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const syncItem = () => {
    setLoading(true);
    setSyncedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    syncItem,
  };
}

export { useLocalStorage };
