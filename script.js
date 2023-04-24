let gerador = document.querySelector('.gerador');
let senhaGerada = document.querySelector('.senha-gerada');
let copiarSenha = document.querySelector('.copy-js');
let inputQuantidade = document.querySelector('.inputQuantidade');
let modal = document.querySelector(".modal")
let closeModal = document.querySelector('.btn-fechar-modal')


function gerarSenha(tamanho) {
  let senhaAleatoria = '';
  let caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < tamanho; i++) {
    senhaAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length),
    );
  }
  return senhaAleatoria;
}

function mostrarSenha() {
  if (inputQuantidade.value === '') {
    alert('Favor, digite uma quantidade!');
  } else if (inputQuantidade.value > 10 || inputQuantidade.value < 4 ) {
    alert('Min: 4 / Max: 10');
  } else {
    senhaGerada.innerHTML = gerarSenha(inputQuantidade.value);
  }

  inputQuantidade.value = '';
  inputQuantidade.focus();
}


function copyPassword() {
  if(senhaGerada.innerHTML === 'Senha Gerada'){
    alert("Favor, gere uma quantidade!")
  }else{
    navigator.clipboard.writeText(senhaGerada.innerHTML);
    modal.classList.add('modal-ativo')
  }
}


function fecharModal(){
  modal.classList.remove('modal-ativo')
}

// eventos
gerador.addEventListener('click', mostrarSenha);
copiarSenha.addEventListener('click', copyPassword);
closeModal.addEventListener("click", fecharModal)
