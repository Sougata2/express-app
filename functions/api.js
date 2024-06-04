import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/.netlify/functions/api", (req, res) => {
  return res.json({ message: "Hello World" });
});

const handler = ServerlessHttp(app);
module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};

// npm i express serverless-http netlify-cli netlify-lambda
