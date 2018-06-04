"use strict";

const http = require("http");
const getRandomQuotes = require("./randquote");
const port = 3000;

http.createServer((request, response) => {
  console.log(`Running on ${port}`);
  response.writeHead(200, { "Content-type": "text/html;charset=ISO-8859-1" });
  let randomResponse = getRandomQuotes();
  response.write(`MAGIC 8 BALL... Ask your question and refresh the page.<br>`);
  response.write(`${randomResponse}`);
  response.end();
}).listen(port);
