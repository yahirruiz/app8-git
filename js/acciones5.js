// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		}); // cierre del tap de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000); //va a vibrar dos segundos cuando le de tap en mi pantalla
		}); //cierre del tap de vibrar
	}, false); //cierre del EvenListener
}); //cierre de la funcion principal