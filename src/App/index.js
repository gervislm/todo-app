import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../routes/HomePage";
import { EditTodoPage } from "../routes/EditTodoPage";
import { NewTodoPage } from "../routes/NewTodoPage";
import { NotFound } from "../routes/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export { App };
