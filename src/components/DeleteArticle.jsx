import React from "react";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../actions/news.actions";

const DeleteArticle = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(id);
    dispatch(deleteArticle(id));
  };

  return (
    <button type="submit" onClick={() => handleDelete(id)}>
      Supprimer
    </button>
  );
};

export default DeleteArticle;
