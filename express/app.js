const express = require("express");

// Create a new express application instance
const app = express();

app.use(express.json());

const Joi = require("joi");

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Sara",
  },
  {
    id: 3,
    name: "Bob",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.send([
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 25,
    },
  ]);
});

// Obtain a user by id
app.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  // If user is not found, return 404
  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  res.send(user);
});

// Create a new user
app.post("/api/users", (req, res) => {
  // Check the request body against the schema
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  // Validate the request body
  const result = schema.validate(req.body);

  // If the request body is invalid, return 400 with a message
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Create a new user
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };

  // Add the new user to the users array
  users.push(user);

  // Return the new user
  res.send(user);
});

// Get users by year and month
app.get("/api/users/:year/:month", (req, res) => {
  res.send({ ...req.params, ...req.query });
});

// Define a environment variable to the port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
