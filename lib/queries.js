"use strict";

const express = require("express");
const router = express.Router();
var codie;

router.get("/distance", function (request, response) {
  codie.getDistance(function (data) {
    response.jsonp(data);
  });
});

router.get("/battery", function (request, response) {
  codie.getBattery(function (data) {
    response.jsonp(data);
  });
});

router.get("/sound", function (request, response) {
  codie.getSound(function (data) {
    response.jsonp(data);
  });
});

router.get("/light", function (request, response) {
  codie.getLight(function (data) {
    response.jsonp(data);
  });
});

router.get("/line", function (request, response) {
  codie.getLine(function (data) {
    response.jsonp(data);
  });
});

module.exports = function (c) {
  codie = c;
  return router;
};
