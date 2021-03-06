'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var hourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var totalTotal = 0;

function header() {
  var table = document.getElementsByTagName('table')[1];
  var tr = document.createElement('tr');
  table.appendChild(tr);

  var th = document.createElement('th');
  tr.appendChild(th);

  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  };

  th = document.createElement('th');
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
    var dailyTotal = 0;
    var table = document.getElementsByTagName('table')[1];
    var tr = document.createElement('tr');
    tr.innerText = this.name;
    tr.setAttribute('class', this.name);
    table.appendChild(tr);
    for (var i = 0; i < hours.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      var sales = Math.round(randomCust * this.avgCust);
      dailyTotal += sales;
      hourlyTotal[i] = hourlyTotal[i] + sales;
      totalTotal += sales;
      tr = document.getElementsByClassName(this.name)[0];
      var td = document.createElement('td');
      td.innerText = sales;
      td.setAttribute('class', this.name);
      tr.appendChild(td);
    };
    tr = document.getElementsByClassName(this.name)[0];
    td = document.createElement('td');
    td.innerText = dailyTotal;
    td.setAttribute('id', 'special-boi');
    td.setAttribute('class', this.name);
    tr.appendChild(td);
  };
  this.generate();

};

var pike = new Store('First and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seacenter = new Store('Seattle Center', 11, 38, 3.7);
var caphill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function footer() {
  var table = document.getElementsByTagName('table')[1];
  var tr = document.createElement('tr');
  tr.setAttribute('id', 'special-boi');
  tr.setAttribute('class', 'footer');
  tr.innerText = 'TOTAL';
  table.appendChild(tr);

  for (var i = 0; i < hours.length; i++) {
    tr = document.getElementsByClassName('footer')[0];
    var td = document.createElement('td');
    td.innerText = hourlyTotal[i];
    tr.appendChild(td);
  };
  tr = document.getElementsByClassName('footer')[0];
  td = document.createElement('td');
  td.innerText = totalTotal;
  tr.appendChild(td);
};

footer();

function newStore(event){
  event.preventDefault();
  var name = event.target.storeName.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avgCust = event.target.avgCust.value;
  new Store(name, min, max, avgCust);
}

var test = document.getElementById('theForm');
test.addEventListener('submit', newStore);
// newStore();

// this.render = function() {
//   this.dailySalesGen();
//   var cont = document.getElementById('header');
//   var tableRow = document.createElement('tr');
//   cont.insertBefore(tableTow, cont.childNodes[1]);
//   createAppend('th', '', '', this.name, tableRow);
//   for(var i = 0; i < this.salesReport.length; i++) {
//     createAppend('td', '', '', this.salesReport[i], tableRow);
//   }
//   createAppend('td', 'lastCel', '', this.totalSold, tableTow);
// };
// function createAppend(newChildElementTag, parentElement, newContent, newClass, newId) {
//   var child = document.createElement(newChildElementTag);
//   child.class = newClass;
//   child.id = newId;
//   child.innerText = newContent;
//   parentElement.appendChild(child);
// };
