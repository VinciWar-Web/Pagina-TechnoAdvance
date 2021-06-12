/*CODIGO PARA AL DAR CLICK LA PAGINA VALLA ARRIBA*/

$(document).ready(function(){

	$(".ir-arriba").click(function(){
		$("body, html").animate({ // aplicamos la función animate a los tags body y html
			scrollTop: "0px" //al colocar el valor 0 a scrollTop me volverá a la parte inicial de la página
		}, 300); //el valor 300 indica que lo ara en 700 mili segundos
	});

/*CODIGO PARA APARECER EL BOTON DE ABAJO A ARRIBA*/

	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ){  //condición a cumplirse cuando el usuario aya bajado 200px a más.
			$(".ir-arriba").slideDown(800); //se muestra el botón en 800 mili segundos

		} else {
			$(".ir-arriba").slideUp(800); //se oculta el botón en 800 mili segundos
		}
	});

});


/*CODIGO PARA APARECER EL BOTON TIPO FADE*/

	/*$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ){  //condición a cumplirse cuando el usuario aya bajado 200px a más.
			$(".ir-arriba").fadeIn(800); //se muestra el botón en 800 mili segundos

		} else {
			$(".ir-arriba").fadeOut(800); //se oculta el botón en 800 mili segundos
		}
	});

});*/

