const formulario = document.getElementById('encuesta');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
	event.preventDefault();
	const nombre = document.getElementById('nombre').value;
	const edad = document.getElementById('edad').value;
  const deporte = document.getElementById('deporte').value;
  const comida = document.getElementById('comida').value;
  const comida2 = document.getElementById('comida2').value;
	const genero = document.getElementById('genero').value;
  
	resultado.innerHTML = `Gracias por completar la encuesta ${nombre}.<br>Tu edad es ${edad}, tu deporte favorito es ${deporte}, tu comida favorita es ${comida},la comida que no te gusta es ${comida2} y <br>Tu género es ${genero}.`;
	resultado.style.display = 'block';
});