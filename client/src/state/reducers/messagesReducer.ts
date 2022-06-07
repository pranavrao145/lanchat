import { AnyAction } from "redux";

const reducer = (state: string[] = [], action: AnyAction) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
