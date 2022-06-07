import { Dispatch } from "redux";

export const addMessage = (message: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "add",
      payload: message,
    });
  };
};
