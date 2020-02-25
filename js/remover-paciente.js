var pacientes =  document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");//adiciona uma animaçao ao remover.

  setTimeout(function(){   // espera 5 segundo para fazer a funçao de remover.
    event.target.parentNode.remove();
  },500);

});
