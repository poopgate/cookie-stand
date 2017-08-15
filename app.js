'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var hourlytotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function header() {
  var body = document.getElementsByTagName('body')[0];
  var table = document.createElement('table');
  body.appendChild(table);
  var table = document.getElementsByTagName('table')[0];
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var tr = document.getElementsByTagName('tr')[0];
  var th = document.createElement('th');
  tr.appendChild(th);

  for (var i = 0; i < hours.length; i++) {
    var tr = document.getElementsByTagName('tr')[0];
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  };

  var tr = document.getElementsByTagName('tr')[0];
  var th = document.createElement('th');
  th.innerText = 'TOTAL';
  tr.appendChild(th);
};

header();

function Store(name, min, max, avgCust){
  this.hours = hours;
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCust = avgCust;
  this.generate = function() {
    var totalsales = 0;

    var table = document.getElementsByTagName('table')[0];
    var tr = document.createElement('tr');
    tr.innerText = this.name;
    tr.setAttribute('class', this.name);
    table.appendChild(tr);
    for (var i = 0; i < hours.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
      totalsales += sales;
      hourlytotals[i] = hourlytotals[i] + sales;
      var tr = document.getElementsByClassName(this.name)[0];
      var td = document.createElement('td');
      td.innerText = sales;
      td.setAttribute('class', this.name);
      tr.appendChild(td);
    };
    var tr = document.getElementsByClassName(this.name)[0];
    var td = document.createElement('td');
    td.innerText = totalsales;
    td.setAttribute('class', this.name);
    tr.appendChild(td);
  };
  this.generate();
};

// function footer() {
//   var body = document.getElementsByTagName('body')[0];
//   var table = document.createElement('table');
//   body.appendChild(table);
//   var table = document.getElementsByTagName('table')[0];
//   var tr = document.createElement('tr');
//   table.appendChild(tr);
//   var tr = document.getElementsByTagName('tr')[0];
//   var th = document.createElement('th');
//   tr.appendChild(th);
//
//   for (var i = 0; i < hours.length; i++) {
//     var tr = document.getElementsByTagName('tr')[0];
//     var th = document.createElement('th');
//     th.innerText = hours[i];
//     tr.appendChild(th);
//   };
//
//   var tr = document.getElementsByTagName('tr')[0];
//   var th = document.createElement('th');
//   th.innerText = 'TOTAL';
//   tr.appendChild(th);
// };
//
// footer();

var pike = new Store('First and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seacenter = new Store('Seattle Center', 11, 38, 3.7);
var caphill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
