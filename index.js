"use strict";


const Server = require("./lib/server");

var server = new Server();

server.start(function (error) {
  if (error) {
    console.log("Error connecting to Codie");
    console.log(error);
  } else {
    console.log("Codie server started");
  }
});
