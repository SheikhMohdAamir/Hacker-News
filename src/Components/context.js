import { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  hit: [],
  nbPages: 0,
  page: 0,
  query: '',
  loading: true,
};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNewsData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      dispatch({
        type: "GET_NEWS",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNewsData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  // Search Functionality
  const searchHandler = (searchParams) => {
    dispatch({ type: "SEARCH_NEWS", payload: searchParams });
  };

  // Previos & Next Page - Pagination
  const prevPageHandler = () => {
    dispatch({type:"PREV_PAGE"})
  }

  const nextPageHandler = () => {
    dispatch({type:"NEXT_PAGE"})
  }

  return (
    <Context.Provider value={{ ...state, searchHandler, prevPageHandler, nextPageHandler }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
