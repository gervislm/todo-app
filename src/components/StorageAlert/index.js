import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./StorageAlert.css";

function StorageAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);
  if (show) {
    return (
      <div className="StorageAlert-bg">
        <div className="StorageAlert-container">
          <p>There were changes in another tab or page</p>
          <p>You must sync the changes to continue</p>
          <button
            className="ReloadContent"
            onClick={() => {
              toggleShow(false);
            }}
          >
            Load Changes
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { StorageAlert };
