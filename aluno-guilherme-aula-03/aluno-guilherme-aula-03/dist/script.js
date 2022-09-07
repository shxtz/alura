var numerSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var eleR = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numerSecreto) {
    eleR.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    eleR.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    eleR.innerHTML = "Errou";
  }
}

function Resetar() {
  numerSecreto = parseInt(Math.random() * 11);
  var eleR = document.getElementById("resultado");
  eleR.innerHTML = "Novo número aleatorio criado";
}

//DESAFIOS//

//número de tentativas//imprimir//Enquanto a pessoa ñ errar//MSG DE ERROU O NUMERO SECRETO E >//<
//== e ===//