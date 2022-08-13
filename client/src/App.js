import React from "react";
import { HomePage, PostForm, NotFound } from "./pages/index";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex iten.center">
      <div className="px-10 container bg-red-100 m-auto text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
