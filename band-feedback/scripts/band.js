(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }
  function BandInfor(selector){
    if (!selector) {
      throw new Error("No Selector Provided");
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  CheckList.prototype.addClickHandler = function(fn) {
    this.$element.on("click", "input", function(event) {
      var email = event.target.value;
      // this.removeRow(email);
      fn(email);
    }.bind(this));
  };
  CheckList.prototype.addRow = function(coffeeOrder) {
    // this.removeRow(coffeeOrder.emailAddress);
    var rowElement = new Row(coffeeOrder);
    this.$element.append(rowElement.$element);
  };
  // CheckList.prototype.removeRow = function(email) {
  //   this.$element
  //     .find("[value='" + email + "']")
  //     .closest("[data-coffee-order='checkbox']")
  //     .remove();
  // };
  
  function Row(coffeeOrder) {
    var $div = $("<div></div>", {
      "data-coffee-order": "checkbox",
      "class": "checklist"
    });
    var $label = $("<label></label>");

    var $moreinfo = $("<button class='btn btn-primary'>More Info</button>", {
      type: "button",

    });
    var $review = $("<button class='btn btn-primary'>Review</button>", {
      type: "button",
    });
    var description = "<div class=\"comment-img\"><img src="+ coffeeOrder.BandImage +"  width=\"250\" height=\"150\" /> </div>";
    description += coffeeOrder.BandName + " on ";
    description += coffeeOrder.EventDate + " at ";
    description += coffeeOrder.EventLocation + " ";

    $label.append(description);
    $label.append($moreinfo);
    $label.append($review);
    $div.append($label);

    this.$element = $div;
  }
  App.BandInfor = BandInfor;
  App.CheckList = CheckList;
  window.App = App;
})(window);
