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
			$(".l-email").attr("data-error", "*Ingresa un correo válido");
			$("#email").val("");
			EmailError = true;
		} else {
			$(this).css("border-color", "green");
			localStorage.setItem('email',$("#email").val());
			EmailError = false;
		}
	})

	/*----------* PASSWORD *----------*/
	$("#password").blur(function() {
		if (!(/^\d{1,8}([0-9])*$/.test($(this).val()))) {
			$(this).css("border-color", "red");
			$(".l-pass").attr("data-error", "*Debe una contraseña válida");
			$("#password").val("");
			PasswordError = true;
		} else {
			$(this).css("border-color", "green");
			localStorage.setItem('password',$("#password").val());
			PasswordError = false;
		}
	})
	/*----------* DESACTIVAR/ACTIVAR EL BOTON NEXT SI CAMPOS NO VACIOS *----------*/
	$('button[type="submit"]').attr('disabled','disabled');
	$("input").blur(function() {  
		event.preventDefault();
        if($("#email").val()!='' && $("#password").val()!=''){ 
            $('button[type="submit"]').removeAttr('disabled');
        }
        else {  
        	$('button[type="submit"]').attr('disabled','disabled');
        }  
    });
    /*----------* IR A LA SIGUEINTE PAGINA *----------*/
    $('button[type="submit"]').click(function() {
    	event.preventDefault();
        window.location.href="index_home.html";
    }); 
   
	/*----------* COMPROBAR  *----------*/
	$(".contact-form").submit(function(event) {
		if(EmailError === true || PasswordError === true){
		 	event.preventDefault(); // prevent sending 
		 	$("#email,#password").blur();
	 	}
	});


	/********************************** HOME ***********************************/

  	$('.button-collapse').sideNav();


});


