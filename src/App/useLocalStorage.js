import React from "react";

function useLocalStorage(itemName, initValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initValue })
  );
  const { syncedItems, item, loading, error } = state;

  //Action Creators
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSynchronize = () => dispatch({ type: actionTypes.synchronize });

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

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [syncedItems]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const syncItem = () => {
    onSynchronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    syncItem,
  };
}

const initialState = ({ initValue }) => ({
  syncedItems: true,
  loading: true,
  error: false,
  item: initValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  synchronize: "SYNCHRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    syncedItems: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    syncedItems: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
