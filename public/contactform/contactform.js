
jQuery(document).ready(function($) {
"use strict";

    //Contact
    $('form.contactForm').submit(function(){
     
         var str = {
             name: $('#name').val(),
             cel: $('#cel').val(),
             subject: $('#subject').val(),
             message: $('#message').val(),
             email: $('#email').val(),
             pais: $('#pais').val(),
            }	
            $.ajax({
                type: "POST",
                // headers: {  
                //         'Access-Control-Allow-Origin': '*' 
                // },
                // url: "http://localhost:5000/api/sendMail",
                url: "https://maestraisis.herokuapp.com/api/sendMail",
                data: str,
                success: function(msg){
                   // alert(msg);
                    if(msg == 'OK') {
                        $("#sendmessage").addClass("show");			
                        $("#errormessage").removeClass("show");	
                        $('.contactForm').find("input, textarea").val("");
                    }
                    else {
                        $("#sendmessage").removeClass("show");
                        $("#errormessage").addClass("show");
                        $('#errormessage').html(msg);
                    }
                    
                }
            });
        return false;
    });

});