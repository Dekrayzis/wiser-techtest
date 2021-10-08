const initialState = { apodData: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "apod_data":
      return { apodData: action.payload };
    default:
      return state;
  }
};

export default reducer;