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
};

export default reducer;
