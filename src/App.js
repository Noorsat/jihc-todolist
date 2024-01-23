import { useEffect, useState } from "react";
import { TodoListBody } from "./components/TodoListBody/TodoListBody";
import { TodoListHeader } from "./components/TodoListHeader/TodoListHeader";
import { Route, Routes } from "react-router-dom";
import { TodoList } from "./pages/TodoList/TodoList";
import Home from "./pages/Home/Home";
import { News } from "./pages/News/News";
import { Layout } from "./components/Layout/Layout";

function App() {
  

  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
