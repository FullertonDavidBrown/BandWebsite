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

//gets the current band name and lists of
  var bandNameNew = (function(){
    var requestParam = window.location.search.split("?")[1];
    return decodeURIComponent(requestParam.split("=")[1]);
  })();


  //set name of band (set to default "value") // needs to be changed
  ds.get(bandNameNew, function(data){
    bandName.setName(data[0]);
  });

  //add descript of set band
  ds.get(bandNameNew, function(data){
    bandDescript.getInfo(data[0]);
  });


  ds.get(bandNameNew, function(data){
    data.forEach(function(event){
      eList.addEvent(event);
  });
});


})(window);
