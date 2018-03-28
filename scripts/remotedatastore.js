(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    this.id = "";
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
    this.responseJSON = "";
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    return $.makeArray($.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      window.lastGetAllResult = cb(serverResponse);
    }).responseJSON);
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    return $.makeArray($.get(this.serverUrl + "/" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    }).responseJSON);
  };

  RemoteDataStore.prototype.remove = function(key) {
    window.lastGetAllResult = "";
    $.get(this.serverUrl + "/?emailAddress=" + key, function(serverResponse) {
      window.lastGetAllResult = serverResponse[0].id;
      var item = window.lastGetAllResult;
      $.ajax(this.serverUrl + "/" + item, {
        type: "DELETE"
      });
    }.bind(this));

  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
