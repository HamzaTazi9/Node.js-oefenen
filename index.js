import express from "express";

const app = express();
const port = 3000;

let messages = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/messages", (req, res) => {
  res.send("GET messages received");
});

app.get("/api/v1/messages/:id", (req, res) => {
  const result = {
    status: "success",
    data: {
      messages: messages,
    },
  };

  res.send(result);
});

app.post("/api/v1/messages", (req, res) => {
  let message = {
    user: "John Doe",
    text: "Hello, gangstah!",
  };

  messages.push(message);

  const result = {
    status: "success",
    data: {},
  };

  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
