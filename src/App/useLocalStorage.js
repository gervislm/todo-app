import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, {
    syncedItems: true,
    loading: true,
    error: false,
    item: initialValue,
  });

  const { syncedItems, item, loading, error } = state;

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = initialValue;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        }

        dispatch({ type: "SUCCESS", payload: parsedItem });
      } catch (error) {
        dispatch({ type: "ERROR" });
      }
    }, 1000);
  }, [syncedItems]);

  //Action Creators

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      dispatch({ type: "SAVE", payload: newItem });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const syncItem = () => {
    dispatch({ type: "SYNCHRONIZE" });
  };

  return { item, saveItem, loading, error, syncItem };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        error: false,
        loading: false,
        syncedItems: true,
        item: action.payload,
      };
    case "ERROR":
      return { ...state, error: true };
    case "SAVE":
      return { ...state, item: action.payload };
    case "SYNCHRONIZE":
      return { ...state, syncedItems: false, loading: true };
    default:
      return state;
  }
};

export { useLocalStorage };
