import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editArticle } from "../actions/news.actions";
import DeleteArticle from "./DeleteArticle";

const Article = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const dispatch = useDispatch();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return newDate;
  };

  const handleEdit = () => {
    if (editContent === "") {
      setIsEditing(false);
    } else {
      dispatch(editArticle(editContent, props.article.id));
      setIsEditing(false);
    }
  };

  return (
    <div
      className="article"
      style={{ backgroundColor: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{props.article.author}</h3>
        <em>Posté le {dateParser(props.article.date)}</em>
      </div>

      {isEditing ? (
        <textarea
          autoFocus
          // defaultValue={editContent ? editContent : props.article.content}
          defaultValue={props.article.content}
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{props.article.content}</p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        )}
        <DeleteArticle key={props.article.date} id={props.article.id} />
      </div>
    </div>
  );
};

export default Article;
