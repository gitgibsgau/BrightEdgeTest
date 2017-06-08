$(document).ready(function(){


  $("#save").on("click", function(){
    var fName = $("#fName").val();
    var lName = $("#lName").val();
    var email = $("#email").val();
    var company = $("#company").val();
    var pNumber = $("#pNumber").val();
    var revenue = $("#revenue").val();
    var notes = $("#notes").val();
    var emailHelp = $(".help-block").html();
    var data = {
      'first name' : fName,
      'last name' : lName,
      'email' : email,
      'company' : company,
      'phone number' : pNumber,
      'revenue' : revenue,
      'additional notes' : notes
    }
    if(fName.length>0 && lName.length>0 && email.length>0 && !emailHelp){
      console.log(JSON.stringify(data));
    }
  });

});
