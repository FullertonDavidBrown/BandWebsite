/*eslint no-console: ["error", { allow: ["log"] }] */
(function(window) {
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function(order) {
    console.log("Adding order for " + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };
  Truck.prototype.deliverOrder = function(customerId) {
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };
  Truck.prototype.printOrders = function(cb) {
    console.log("Truck #" + this.truckId + " has pending orders:");
    this.db.getAll(function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  App.Truck = Truck;
  window.App = App;
})(window);
