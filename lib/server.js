"use strict";

const Codie = require("codiejs");
const config = require("../config.json");
const express = require("express");
const bodyParser = require("body-parser");
const commands = require("./commands");
const queries = require("./queries");

function Server() {
  this.codie = new Codie(config.codieName);
  this.app = express();
  this.app.use(bodyParser.json());
  this.app.use("/commands", commands(this.codie));
  this.app.use("/queries", queries(this.codie));
}

Server.prototype.start = function (cb) {
  var self = this;
  this.codie.connect(function () {
    self.app.listen(config.port);
    cb();
  });
};

module.exports = Server;
