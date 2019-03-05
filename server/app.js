const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// allow cross-origin requests
app.use(cors());

mongoose.connect(
  "mongodb+srv://<username>:<password>@learnmongo-g1zjy.mongodb.net/test?retryWrites=true"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
