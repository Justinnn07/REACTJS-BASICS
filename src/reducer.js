const initialState = {
  dataa: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        dataa: action.dataa,
      };
    default:
      return state;
  }
};

export { initialState };

export default reducer;
