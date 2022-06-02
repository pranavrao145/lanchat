const ws = new WebSocket("ws://localhost:8080/ws");

interface IMessage {
  page: string;
  content: string;
}

const connect = () => {
  console.log("Attempting to connect to websocket...");

  ws.onopen = () => {
    console.log("Succesfully connected to localhost:8080.");
  };

  ws.onclose = (event) => {
    console.log(`Connection to localhost:8080 closed. event message: ${event}`);
  };

  ws.onmessage = (msg) => {
    console.log(`Message received from localhost:8080: ${msg}`);
  };

  ws.onerror = (err) => {
    console.log(`Error with socket: ${err}`);
  };
};

const sendMessage = (page: string, content: string) => {
  console.log(`Sending following message to localhost:8080: ${content}`);

  const message: IMessage = {
    page: page,
    content: content,
  };

  ws.send(JSON.stringify(message));
};

export { sendMessage, connect };
