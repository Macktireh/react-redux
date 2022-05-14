import axios from "axios";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../actions/news.actions";

import Article from "../components/Article";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const News = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState(false);
  const [authorError, setAuthorError] = useState(false);

  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (author === "") {
      setAuthorError(true);
    } else if (content === "") {
      setContentError(true);
    } else {
      const newArticle = {
        id: newsData.length + 1,
        author,
        content,
        date: Date.now(),
      };
      dispatch(addArticle(newArticle));
      setAuthor("");
      setContent("");
    }
  };

  return (
    <div className="news-container">
      <Logo />
      <Navigation />
      <h1>News</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={authorError ? "error" : ""}
          type="text"
          placeholder="Nom"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {authorError && <p>Le nom de l'auteur est obligatoire</p>}
        <textarea
          className={contentError ? "error" : ""}
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {contentError && <p>Veuillez écrire un minimum de 140 caractères.</p>}
        <input type="submit" value="Envoyer" />
      </form>

      <ul>
        {newsData
          ? newsData
              .sort((a, b) => b.date - a.date)
              .map((article, index) => (
                <Article key={index} article={article} />
              ))
          : null}
      </ul>
    </div>
  );
};

export default News;
