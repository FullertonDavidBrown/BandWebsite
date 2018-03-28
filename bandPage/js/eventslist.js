(function(window){
  "use strict"

  var App = window.App || {};
  var $ = window.jQuery;

  function EventList(selector){
      if(!selector){
        throw new Error("No Selector Provided");
      }

      this.$element = $(selector);
      if(this.$element.length === 0){
        throw new Error("Could not find element with selector: " + selector);
      }
  }

//   CheckList.prototype.addClickHandler = function(fn) {
//   this.$element.on("click", "input", function(event) {
//     var email = event.target.value;
//     this.removeRow(email);
//     fn(email);
//   }.bind(this));
// };

//add event to table
EventList.prototype.addEvent = function(nEvent) {
  //remove any existing rows that match the email address
  //this.removeRow(nEvent.Date);

  //create a  new instance  of a row, using the coffee order information
  var rowElement = new Event(nEvent);

  //Add the new row instance's $element property to the checklist
  this.$element.append(rowElement.$element);
};

//remove rowElement
// CheckList.prototype.removeRow = function(date) {
//   this.$element
//     .find("[value=\"" + email + "\"]")
//     .closest("[data-coffee-order=\"checkbox\"]")
//     .remove();
// };

//comsatructor for new event for the particular band
function Event(eventInfo) {
  // var $div = $("<div></div>", {
  //   "data-event-info": "event",
  //   "class": "list"
  // });

  var $tableRow = $("<tr></tr>");

  //var $tableD = $("<td></td>");

  // var $checkbox = $("<input></input>", {
  //   type: "checkbox",
  //   value: coffeeOrder.emailAddress
  // });

  var eDate = "<td>" + eventInfo.EventDate + "</td>";

  var eLocation = "<td>" + eventInfo.EventLocation + "</td>";


  $tableRow.append(eLocation);
  $tableRow.append(eDate);
  //$div.append($label);

  this.$element = $tableRow;
}

App.EventList = EventList;
window.App = App;


})(window);
