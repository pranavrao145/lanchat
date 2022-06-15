import { addMessage } from "../state/action-creaters";
import store from "../state/store";
import { IChatMessage } from "./message";

let ws: WebSocket;

const connect = () => {
  ws = new WebSocket("ws://172.19.0.5:8080/ws");

  console.log("Attempting to connect to websocket...");

  ws.onopen = () => {
    console.log(`Succesfully connected to ${ws.url}.`);
  };

  ws.onclose = (event) => {
    console.log(`Connection to ${ws.url} closed. event message: ${event}`);
  };

  ws.onmessage = (msg) => {
    console.log(`Message received from ${ws.url}: ${msg.data}`);
    const message: IChatMessage = JSON.parse(msg.data);

    store.dispatch(addMessage(message));
  };

  ws.onerror = (err) => {
    console.log(`Error with socket: ${err}`);
  };
};

const sendMessage = (message: string) => {
  if (ws) {
    console.log(`Sending following message to ${ws.url}: ${message}`);
    ws.send(message);
  } else {
    console.error(`WebSocket connection not initialized yet!`);
  }
};

export { sendMessage, connect };
