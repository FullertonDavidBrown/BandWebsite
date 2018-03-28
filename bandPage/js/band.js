(function(window){
  "use strict"

  var App = window.App || {};
  var $ = window.jQuery;

  function BandInfor(selector){
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

//get and add band info to page
  BandInfor.prototype.getInfo = function(nEvent) {
  //remove any existing rows that match the email address
  //this.removeRow(nEvent.Date);

  //create a  new instance  of a row, using the coffee order information
  var bInfo = new Descript(nEvent);

  //Add the new row instance's $element property to the checklist
  this.$element.append(bInfo.$element);
};

BandInfor.prototype.setName = function(nEvent){

  this.$element.append(nEvent.BandName);

};

//remove rowElement
// CheckList.prototype.removeRow = function(date) {
//   this.$element
//     .find("[value=\"" + email + "\"]")
//     .closest("[data-coffee-order=\"checkbox\"]")
//     .remove();
// };

//comsatructor for new event for the particular band
function Descript(Info) {

  var $para = $("<p></p>");


  var About = Info.BandInfo;

  $para.append(About);
  //$tableRow.append(eDate);
  //$div.append($label);

  this.$element = $para;
}




App.BandInfor = BandInfor;
window.App = App;


})(window);
