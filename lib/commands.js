"use strict";

const express = require("express");
const router = express.Router();
var codie;

// these need to be get methods to work over JSONP

router.get("/echo", function (request, response) {
  codie.echo(request.query.speed, function () {
    response.jsonp(true);
  });
});

router.get("/speed", function (request, response) {
  codie.speed(request.query.leftSpeed, request.query.rightSpeed, function () {
    response.jsonp(true);
  });
});

router.get("/move", function (request, response) {
  codie.move(request.query.distance, request.query.speed, request.query.speed, function () { // faking left and right speed, since they don't generally work well
    response.jsonp(true);
  });
});

router.get("/turn", function (request, response) {
  codie.turn(request.query.angle, request.query.speed, function () {
    response.jsonp(true);
  });
});

router.get("/beep", function (request, response) {
  codie.beep(request.query.duration, function () {
    response.jsonp(true);
  });
});

router.get("/setColor", function (request, response) {
  codie.setColor(request.query.hue, request.query.saturation, request.query.value, function () {
    response.jsonp(true);
  });
});

module.exports = function (c) {
  codie = c;
  return router;
};
