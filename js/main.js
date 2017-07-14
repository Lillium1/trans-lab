/********************************** REGISTRO ***********************************/

$(document).ready(function(){
	'use strict';
		// error variables
		var EmailError  = true,
			PasswordError = true;

	/*----------* EMAIL *----------*/
	$("#email").blur(function() {
		if(!(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test($("#email").val()))){
			$(this).css("border-color", "red");
			$("label").attr("data-errores", "*Ingresa un correo válido");
			$("#email").val("");
			EmailError = true;
		}

		else {
			$(this).css("border-color", "green");
			localStorage.setItem('email',$("#email").val());
			EmailError = false;
		}
	})

	/*----------* PASSWORD *----------*/
	$("#password").blur(function() {
		if (!(/^\d*$/.test($("#password").val())) || $(this).val()=='') {
			$(this).css("border-color", "red");
			$("label").attr("data-error", "*Debe ingresar sólo numeros");
			$("#password").val("");
			PasswordError = true;
		}

		else {
			$(this).css("border-color", "green");
			PasswordError = false;
		}
	})

	$('button[type="submit"]').attr('disabled','disabled');
	$("#email,#password").click(function() {  
        if($(this).val()!=''){ 
            $('button[type="submit"]').removeAttr('disabled');  
        } else {  
        	$('button[type="submit"]').attr('disabled','disabled');  
        }  
    });
    
	/*----------* COMPROBAR QUE LOS CAMPOS ESTEN CORRECTOS *----------*/
	$(".contact-form").submit(function(event) {
		if(EmailError === true || PasswordError === true){
		 	event.preventDefault(); // prevent sending 
		 	$("#email,#password").blur();
	 	}
	});

});


/********************************** HOME ***********************************/
