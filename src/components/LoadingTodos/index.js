import React from "react";
import "./LoadingTodos.css";

export function LoadingTodos() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Loading TODO...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}
