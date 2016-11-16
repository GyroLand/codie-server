"use strict";

const express = require("express");
const router = express.Router();
var codie;

// these need to be get methods to work over JSONP

router.get("/move", function (request, response) {
  codie.move(request.query.distance, request.query.speed, request.query.speed, function () { // faking left and right speed, since they don't generally work well
    response.jsonp(true);
  });
});

router.get("/enableMotorBoth", function (request, response) {
  codie.enableMotorBoth(request.query.leftSpeed, request.query.rightSpeed, function () {
    response.jsonp(true);
  });
});

router.get("/enableMotorLeft", function (request, response) {
  codie.enableMotorLeft(request.query.speed, function () {
    response.jsonp(true);
  });
});

router.get("/enableMotorRight", function (request, response) {
  codie.enableMotorRight(request.query.speed, function () {
    response.jsonp(true);
  });
});

router.get("/turn", function (request, response) {
  codie.turn(request.query.angle, request.query.speed, function () {
    response.jsonp(true);
  });
});

router.get("/beep", function (request, response) {
  codie.beep(request.query.volume, request.query.frequency, request.query.duration, function () {
    response.jsonp(true);
  });
});

router.get("/setColor", function (request, response) {
  codie.setColor(request.query.hue, request.query.saturation, request.query.value, function () {
    response.jsonp(true);
  });
});

router.get("/setAnimation", function (request, response) {
  codie.setAnimation(request.query.animation, request.query.hue, request.query.saturation, request.query.repeat, request.query.speed, function () {
    response.jsonp(true);
  });
});

module.exports = function (c) {
  codie = c;
  return router;
};
