import { addMessage } from "../state/action-creaters";
import store from "../state/store";

const ws = new WebSocket("ws://localhost:8080/ws");

const connect = () => {
  console.log("Attempting to connect to websocket...");

  ws.onopen = () => {
    console.log("Succesfully connected to localhost:8080.");
  };

  ws.onclose = (event) => {
    console.log(`Connection to localhost:8080 closed. event message: ${event}`);
  };

  ws.onmessage = (msg) => {
    console.log(`Message received from localhost:8080: ${msg.data}`);
    store.dispatch(addMessage(msg.data));
  };

  ws.onerror = (err) => {
    console.log(`Error with socket: ${err}`);
  };
};

const sendMessage = (message: string) => {
  console.log(`Sending following message to localhost:8080: ${message}`);
  ws.send(message);
};

export { sendMessage, connect };
