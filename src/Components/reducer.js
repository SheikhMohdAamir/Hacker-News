const reducer = (state, action) => {
  if (action.type === "GET_NEWS"){
    return {
      ...state,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
      loading:false
    };
  }
  
  else if(action.type=== "SEARCH_NEWS"){
    return{
      ...state,
      query:action.payload
    }
  }

  else if(action.type=== "PREV_PAGE"){
    let prevPage = state.page-1

    if(prevPage <= 0) {
      prevPage = 0
      }

    return{
      ...state,
      page:prevPage
    }
  }

  else if(action.type=== "NEXT_PAGE"){
    let nextPage = state.page+1

    if(nextPage >= state.nbPages) {
      nextPage = 0
      }
    return{
      ...state,
      page:nextPage
    }
  }
};

export default reducer;
