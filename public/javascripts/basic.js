$("#Welcome").height(window.screen.availHeight);


$("#RegistrierenButton").click(function(){

    console.log("Clicked");

    username = $("#RegistrierenEmail").val();
    password = "";

    if($("#RegistrierenPassword").val() == $("#RegistrierenPasswordAgain").val()){
        password = hash($("#RegistrierenPassword").val());
    }
    else{
        $('#RegistrierenPasswordAgain').popover();
        $('#RegistrierenPasswordAgain').focus();
    }
    

});