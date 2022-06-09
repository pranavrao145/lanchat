import { Dispatch } from "redux";
import { IChatMessage } from "../../api/message";

export const addMessage = (message: IChatMessage) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "add",
      payload: message,
    });
  };
};
