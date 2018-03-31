(function(window) {
  "use strict";
  var App = window.App;
  var FORM_SELECTOR = "[data-coffee-order='form']";
  var CHECKLIST_SELECTOR = "[data-coffee-order='checklist']";
  // var EVENT_INFO_SELECTOR = "[data-event-list = \"eventList\"]";
  // var BAND_INFO_SELECTOR = "[data-band-descript = \"bandDescript\"]";
  // var BAND_NAME_SELECTOR = "[data-band-info = \"bandInfo\"]";
  var SERVER_URL = "http://localhost:2403/band";
  var SERVER_URL_USER = "http://localhost:2403/user";
  var Truck = App.Truck;
  var $ = window.jQuery;
  //var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  // var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck("ncc-1701", remoteDS);

  var remoteDSUser = new RemoteDataStore(SERVER_URL_USER);
  // var BandDataStore = App.BandDataStore;
  // var EventList = App.EventList;
  // var BandInfor = App.BandInfor;
  // var ds = new BandDataStore(SERVER_URL);
  // var eList = new EventList(EVENT_INFO_SELECTOR);
  // var bandDescript = new BandInfor(BAND_INFO_SELECTOR);
  // var bandName = new BandInfor(BAND_NAME_SELECTOR);
  window.myTruck = myTruck;

  //for deleting pending order after clicking checklist
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  //for adding orders in backend
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(remoteDSUser, data);
    checkList.addRow.call(checkList, data);
  });
  // formHandler.addInputHandler(Validation.isCompanyEmail);

  //for displaying pending order even after refresh
  //set name of band (set to default "bend value") // needs to be changed
  //
  // ds.get("Bend", function(data) {
  //   bandName.setName(data[0]);
  // });

  //add descript of set band
  // ds.get("Bend", function(data) {
  //   bandDescript.getInfo(data[0]);
  // });
  // ds.get("Bend", function(data) {
  //   data.forEach(function(event) {
  //     eList.addEvent(event);
  //   });
  // });
  $(FORM_SELECTOR).ready(function() {
    myTruck.printOrders.call(myTruck, function(serverResponse) {
      $.each(serverResponse, function(i, coffeeOrder) {
        checkList.addRow.call(checkList, coffeeOrder);
      });
    });
  });

})(window);
