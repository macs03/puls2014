var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $ ('#contenido'),
	$post = $ ('.item').first();

if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url',$url.val());
},1000);


function mostrarFormulario (e) {
	//para evitar que la accion por defecto del elemento no la haga sino que haga lo que nosotros queremos
	e.preventDefault();
	$form.slideToggle();
}

function agregarPost (e) {
	e.preventDefault();
	var url = $url.val(),
		titulo = $titulo.val(),
		clone = $post.clone();
	
	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href',url);

	clone.hide();

	$list.prepend(clone);

	clone.fadeIn();
	$form.slideToggle();
}

//eventos
$button.click( mostrarFormulario );
$form.on('submit',agregarPost);