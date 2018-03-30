(function(window){
  "use strict";
    var App = window.App || {};
    var $ = window.jQuery;
    /*eslint-disable no-console*/

    //constructor for RemoteDataStore
    function BandDataStore(url) {
      if (!url) {
        throw new Error("No remote URL supplied.");
      }
      this.serverUrl = url;
    }

    BandDataStore.prototype.getAll = function(cb) { //cb is callback cb
      $.ajax(this.serverUrl, {
        type: "GET",
        success: function(serverResponse) {
          // Do something
          console.log(serverResponse);
          //send the data from serverresponse (data from the deployd database) to cb to callback
          cb(serverResponse);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });


    };

    //function to get individual events from individual bands
    BandDataStore.prototype.get = function(key, cb) {
      $.ajax(this.serverUrl + "?BandName=" + key, {
        type: "GET",
        success: function(serverResponse) {
          // Do something
          console.log(serverResponse);
          cb(serverResponse);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    };

    

    App.BandDataStore = BandDataStore;
    window.App = App;



})(window);
