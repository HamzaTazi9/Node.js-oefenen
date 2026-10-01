let messages = [];

const getAll = (req, res) => {
  const result = {
    status: "success",
    data: {
      messages: messages,
    },
  };

  res.json(result);
};

const getById = (req, res) => {
  const message = messages[req.params.id];

  if (!message) {
    return res.status(404).json({ status: "fail", data: null });
  }

  const result = {
    status: "success",
    data: {
      message: message,
    },
  };

  res.json(result);
};

const create = (req, res) => {
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
};

export default { getAll, getById, create };
