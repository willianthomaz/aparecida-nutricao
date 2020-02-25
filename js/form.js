var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){ // ESCUTADOR DE EVENTO (CLICK)
  event.preventDefault();

  var form = document.querySelector("#form-adiciona") //CHAMA UM EVENTO DO HTML PARA O JS
  // EXTRAINDO INFORMAÇOES DO PACINTE DO FORM.
  var paciente = obtemObjetoDoFormulario(form);
  //CRIA A TR E A TD DO PACIENTE.

  var erros = validaPaciente(paciente);

  if (erros.length > 0 ) {
    exibeMensagemDeErro(erros);
    return;
  }
  
  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagensErro = document.querySelector("#mensagem-erro");
  mensagensErro.innerHTML = "";
});
  //A escutar eventos do browser com a função addEventListener()
  //Que a função criadora de elementos é .createElement()
  //A pegar o valor de um input por meio da propriedade .value
  //A acessar os input de um form por meio da propriedade _name_.
  //A adicionar elementos na página e dentro de outros elementos com a função appendChild()

  //ADICIOMAMDO O PACIENTE NA TABELA.
function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);

    });

}


function obtemObjetoDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc:calculaImc(form.peso.value,form.altura.value)
  }

    return paciente;
}
 function montarTr(paciente){

   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add("paciente");

   pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
   pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
   pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
   pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
   pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

   return pacienteTr;

 }

 function montaTd(dado,classe){
   var td = document.createElement("td");
   td.textContent = dado;
   td.classList.add(classe);

   return td;
 }


 function validaPaciente(paciente){

   var erros = [];

   if (paciente.nome.length == 0) {
     erros.push("O nome não pode ser em branco");
   }

   if (!validaPeso(paciente.peso)){
     erros.push("O Peso é inválido");
   }

  if (!validaPeso(paciente.altura)){
    erros.push("O Peso é inválido");
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }
  return erros;
}
