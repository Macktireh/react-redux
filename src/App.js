import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getArticle } from "./actions/news.actions";

import About from "./views/About";
import Home from "./views/Home";
import News from "./views/News";
import NotFound from "./views/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
