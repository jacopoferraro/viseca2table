var tN = document.getElementsByClassName("name");
var tD = document.getElementsByClassName("date-item--full");
var tC = document.getElementsByTagName("pfm-category");
var tA = document.querySelectorAll(
  '[data-ng-bind="transaction.amount | number: 2"]'
);

function getDate(elem) {
  return elem.textContent;
}

function getAmount(elem) {
  return elem.textContent;
}

function getName(elem) {
  return elem.firstElementChild.textContent;
}

function getCategory(elem) {
  return elem.firstElementChild.firstElementChild.lastElementChild.alt;
}

var columns = [tD, tA, tN, tC];
var getters = [getDate, getAmount, getName, getCategory];

function createTable() {
  var myTableDiv = document.getElementById("main");
  var table = document.createElement("TABLE");
  table.border = "1";
  table.id = "visecasummarytable";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  myTableDiv.insertBefore(table, myTableDiv.firstChild);
  return tableBody;
}


function addTable() {
  var table = document.getElementById("visecasummarytable");
  var tableBody;
  if (table) {
    tableBody = table.getElementsByTagName("tbody")[0];
  } else {
    tableBody = createTable();
  }

  for (var i = 0; i < tN.length; i++) {
    if (getName(columns[2][i]) == "Votre paiement - Merci" ||
        getName(columns[2][i]) == "Suo pagamento - Grazie") continue;
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < columns.length; j++) {
      var td = document.createElement("TD");
      td.width = "75";
      var text =  getters[j](columns[j][i]);
      td.appendChild(document.createTextNode(text));
      tr.appendChild(td);
    }
  }
}

addTable();
