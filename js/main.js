
var inputis = document.getElementById("email");
var error = document.getElementsByClassName("errorEmail");

$('inputis').on('change'), function(){
    if($('email').val() === false){
        $('error').show();
    }else{
        $('error').hide();
    }
};