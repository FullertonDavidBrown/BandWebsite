(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-review=\"form\"]";
  var SERVER_URL = "http://localhost:2403/reviews";
  var App = window.App;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var remoteDS = new RemoteDataStore(SERVER_URL);

  var formHandler = new FormHandler(FORM_SELECTOR);
  window.remoteDS = remoteDS;

  formHandler.addSubmitHandler(function(data) {
    remoteDS.add.call(remoteDS, 0, data);
  });

})(window);
