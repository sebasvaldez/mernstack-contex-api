import React from "react";
import { HomePage, PostForm, NotFound } from "./pages/index";

import { Routes, Route } from "react-router-dom";

import { PostProvider } from "./context/postContext";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex iten.center">
      <div className="px-10 container bg-red-100 m-auto text-center">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
