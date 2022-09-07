function Converterdolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorElementoNumerico = parseFloat(valor);

  var valorEmReal = valorElementoNumerico * 5.25;
  console.log(valorEmReal);

  var eValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  eValorConvertido.innerHTML = valorConvertido;
}
function ConverterRublos() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorElementoNumerico = parseFloat(valor);

  var valorEmReal = valorElementoNumerico * 11.67;
  console.log(valorEmReal);

  var eValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Rublos é  " + valorEmReal;
  eValorConvertido.innerHTML = valorConvertido;
}