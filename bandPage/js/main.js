(function(window){
  "use strict"

  var App = window.App;

  var EVENT_INFO_SELECTOR = "[data-event-list = \"eventList\"]";
  var BAND_INFO_SELECTOR = "[data-band-descript = \"bandDescript\"]";
  var BAND_NAME_SELECTOR = "[data-band-info = \"bandInfo\"]";

  var SERVER_URL = "http://localhost:2403/band";

  var BandDataStore = App.BandDataStore;



  var EventList = App.EventList;

  var BandInfor = App.BandInfor;

  var ds = new BandDataStore(SERVER_URL);

  var eList = new EventList(EVENT_INFO_SELECTOR);

  var bandDescript = new BandInfor(BAND_INFO_SELECTOR);

  var bandName = new BandInfor(BAND_NAME_SELECTOR);


  //set name of band
  ds.get("Bend", function(data){
    bandName.setName(data[0]);
  });

  //add descript of set band
  ds.get("Bend", function(data){
    bandDescript.getInfo(data[0]);
  });

  //add the event list to the page (have not checked for if it is for the right band)
  // ds.getAll(function(data){
  //   data.forEach(function(event){
  //     eList.addEvent(event);
  //   });
  // });

  ds.get("Bend", function(data){
    data.forEach(function(event){
      eList.addEvent(event);
  });
});






})(window);
