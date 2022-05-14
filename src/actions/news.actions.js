import axios from "axios";

export const GET_ARTICLE = "GET_ARTICLE";
export const ADD_ARTICLE = "ADD_ARTICLE";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const getArticle = () => {
  return async (dispatch) => {
    return axios
      .get("http://localhost:3001/articles")
      .then((res) => dispatch({ type: GET_ARTICLE, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const addArticle = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/articles", data)
      .then(dispatch({ type: ADD_ARTICLE, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const editArticle = (data, id) => {
  return (dispatch) => {
    return axios
      .patch("http://localhost:3001/articles/" + id, { content: data })
      .then(dispatch({ type: EDIT_ARTICLE, payload: { data, id } }))
      .catch((err) => console.log(err));
  };
};

export const deleteArticle = (id) => {
  return (dispatch) => {
    if (window.confirm("Voulez vous vraiment cet article ?")) {
      return axios
        .delete("http://localhost:3001/articles/" + id)
        .then(dispatch({ type: DELETE_ARTICLE, payload: id }));
    } else {
      return;
    }
  };
};
