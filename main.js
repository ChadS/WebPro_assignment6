$(document).ready(function() {
  //When you click on the button it will change

  $("#btnBuy").click(function() {
    $(".creditcard").hide();

    $(".wiretransfer").hide();

    //When you click on the credit card button it will change to that option
    if ($("#rdCredit").is(":checked")) {
      $(".creditcard").show();
    }

    //When you click on the wire transfer button it will change
    if ($("#rdWireTrans").is(":checked")) {
      $(".wiretransfer").show();
    }
  });

  //This keydown function is to allow only numbers in the credit card textbox controls
  $(".onlyNumbers").keydown(function(e) {
      
    // delete, backspace, tab, escape, enter and . to allow
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
      // Allow: Ctrl+A, Command+A

      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up

      (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      return;
    }

    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });

  //This click event is to load the appropriate html file based on the list item selection

  //It uses ajax to load the html file
  $(".informationable li").click(function() {
    var selectedList = $(this).text();

    if (selectedList == "Information 1") $(".infoContent").load("information1.html");
    else if (selectedList == "Information 2")
      $(".infoContent").load("information2.html");
    else if (selectedList == "Information 3")
      $(".infoContent").load("information3.html");
  });
});

//function allows the drag & drop ability
function enableDrop(ev) {
  ev.preventDefault();
}

//enable the drag ability
function dragIt(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

//when the item is dropped into the trashcan it calls this method
function dropIt(ev) {
  var data = ev.dataTransfer.getData("Text");
  var element = document.getElementById(data);

  //Ask confirmation to remove the item
  if (confirm("Do you want to delete this Item " + element.innerText)) {
    ev.preventDefault();

    element.parentNode.removeChild(element);
  }
}
