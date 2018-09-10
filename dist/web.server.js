'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var WebServer = function () {
  function WebServer() {
    _classCallCheck(this, WebServer);

    this.app = express();
    this.app.use(express.static('dist/public'));
  }

  _createClass(WebServer, [{
    key: 'start',
    value: function start() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.server = _this.app.listen(3000, function () {
            resolve();
          });
        } catch (e) {
          console.error(e);
          reject(e);
        }
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this2.server.close(function () {
            resolve();
          });
        } catch (e) {
          console.error(e.message);
          reject(e);
        }
      });
    }
  }]);

  return WebServer;
}();

exports.default = WebServer;