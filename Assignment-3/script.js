
//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};


var table = document.getElementById("table");
var submitBtn = document.getElementById("myButton");
var images = document.querySelectorAll("img");
//delete function
function deleteRows(e) {
  var rowIndex = e.target.parentNode.parentNode.rowIndex;
  alert("Record `Deleted Successfully"); 
  
  table.deleteRow(rowIndex);
  table.deleteRow(rowIndex);
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    var checkbox = document.getElementById("checkbox" + i);
    if (checkbox.checked) {
      submitBtn.style.backgroundColor = "orange";
      break;
    } else {
      submitBtn.style.backgroundColor = "";
    }
  }

  
}


//edit message popup
function editsmsg(e){
  var rowIndex=e.target.parentNode.parentNode.rowIndex;
 
  var msg = "Edit student "+rowIndex+" details !";
  prompt(msg);
  

}

var checkboxes = document.querySelectorAll("input[type='checkbox']");
// Add event listeners to all checkboxes
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", addColumns);
   
 }

// Function to add columns when a checkbox is checked
function addColumns(event) {
 


  var checkbox = event.target;
  var row = checkbox.parentNode.parentNode;
  

  if (checkbox.checked) {
  
   var heading1=document.createElement("th");
   heading1.innerHTML="Delete"
   var heading1=document.createElement("th");
   heading1.innerHTML="Edit"
   var newColumn1 = document.createElement("td");
   newColumn1.innerHTML = "<button class='delete-btn'>Delete</button>";
   var newColumn2 = document.createElement("td");
   newColumn2.innerHTML = "<button class='edit-btn'>Edit</button>";
    //appending columms when checked
   row.appendChild(newColumn1);
   row.appendChild(newColumn2);
   row.style.backgroundColor="yellow";
   
   submitBtn.style.backgroundColor="orange";
    //query to put all delete-btn id to buttons
    var buttons = document.querySelectorAll(".delete-btn");
    //scanning for all eventlistners to check for delete action
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", deleteRows);
    }
    //storing  all edit id
    var editss = document.querySelectorAll(".edit-btn");

    for (var i = 0; i < table.rows.length; i++) {
      editss[i].addEventListener("click", editsmsg);
      
    }
    
    
  } else {
      row.removeChild(row.lastChild);
      row.removeChild(row.lastChild);
      row.style.backgroundColor="";
      submitBtn.style.backgroundColor="";
      
     var isChecked = false;
     for (var i = 1; i <= 100; i++) {
      var checkbox = document.getElementById("checkbox" + i);
      if (checkbox.checked) {
        isChecked = true;
        break;
      }
     }
  
     if (isChecked) {
       submitBtn.style.backgroundColor="orange";
      
      } else {
       // no checkbox is checked
       submitBtn.style.backgroundColor="";
      
      }
    }  


}
// Hide all odd rows at the start
for (var i = 2; i < table.rows.length; i += 2) {
  table.rows[i].style.display = "none";
}
// Add event listeners to all images
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", toggleRow);
}
//function to toggle with the hidden row
function toggleRow(event) {
  var image = event.target;
  var row = image.parentNode.parentNode;
  var nextRow = row.nextElementSibling;

  if (nextRow.style.display === "none") {
    nextRow.style.display = "table-row";
  } else {
    nextRow.style.display = "none";
  }
}
//storing all addrow ids to var
var addRowButton = document.getElementById("addRow");

//initialize c to dynamically give values to cells

var addRowButton = document.getElementById("addRow");
var c;
addRowButton.addEventListener("click",checkrows);
function checkrows(){
 c=(table.rows.length+1)/2;
 addRow(c);

}
//listening the click action when button is clicked

//adding row when a action is performed on mybutton 
function addRow(c) {
  

  alert("Successfully adding row");
  var x = document.createElement("input");
  x.setAttribute("type", "checkbox");
  var img = document.createElement("img");
  var appden = ["Fall","Spring","Summer"];
  var stta = Math.random() < 0.5 ? "TA" : "STUDENT";
  var randomName=Math.random() < 0.5 ? "Approved" : "Denied";
  var d1 = appden[Math.floor(Math.random() * appden.length)];
  x.style.display="block";
  x.style.marginBottom="25px"
  img.src = "/down.png";
  img.style.cursor = "pointer";
  img.width=25;
  
  
 //row to be displayes
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  cell1.appendChild(x);
  x.id="checkbox"+(c);
  cell1.appendChild(img);
  cell2.innerHTML="Student " + c;
  cell3.innerHTML="Teacher " + c;
  
  cell5.innerHTML=d1;
  cell4.innerHTML=randomName;
  
  cell6.innerHTML=stta;
  cell7.innerHTML=Math.floor(Math.random() * 100000 +6);
  cell8.innerHTML=Math.floor(Math.random() * 10+40) + "%";
  
  //row to hide
  var newRow = table.insertRow(-1);
  var newCell = newRow.insertCell(0);
  newCell.colSpan = "8";

  var values = ["Advisor:","<br>", "Award_Details", "Summer 1-2014(TA)", "Budget Number", "Tution Number :", "Comments", "<br>", "Award Details: ","<br>","<br>"];
  for (var i = 0; i <= 10; i++) {
    newCell.innerHTML += `<div>${values[i]}</div>`;
    newRow.style.display="none";
  }
  img.addEventListener("click",toggleRow);
  x.addEventListener("change",addColumns);
  

}









