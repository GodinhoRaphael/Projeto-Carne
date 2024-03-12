
// Funcionamento carrossel
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items[currentItem].classList.add("current-item");
  });
});



const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 0;
const items2 = document.querySelectorAll(".item2");
const maxItems2 = items.length;

controls2.forEach((control2) => {
  control2.addEventListener("click", (e) => {
    isLeft2 = e.target.classList.contains("arrow-left2");

    if (isLeft2) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 0;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item2) => item2.classList.remove("current-item2"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items2[currentItem2].classList.add("current-item2");
  });
});

// Funcionamento Radio
const radioButton = document.querySelectorAll('.radio');

radioButton.forEach((button) => {
  button.addEventListener('click', () => {
    radioButton.forEach((btn) => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected')
  });
});

// Validacao do Radio
function validarRadio(){
  let opcoes = document.querySelectorAll('.radio');
  let marcado = false;

  for (let i=0; i<opcoes.length; i++){
    if (opcoes[i].classList.contains('selected')){
      marcado = true;
      break;
    };
  };

  if (!marcado){
    alert('Selecione pelo menos uma preferencia.');
    return;
  };

  alert('Preferencias validado.');
};

// Funcionamento Select DropDown
const select = document.querySelectorAll('.select');

select.forEach((select2) => {
  const funcionar = select2.querySelector('.funcionar');
  const opcoes = select2.querySelector('.opcoes');
  const opcao = select2.querySelectorAll('.opcao');
  opcao.forEach(function(opcao2){
    opcao2.addEventListener('click', function(){
      opcao.forEach(function(opcao2){
        opcao2.classList.remove('selecionado');
      });

      this.classList.add('selecionado');
    });
  });

  funcionar.addEventListener('click', () => {
    opcoes.style.display = opcoes.style.display === 'block' ? 'none' : 'block';
  });

  opcao.forEach((opcao3) => {
    opcao3.addEventListener('click', () => {
      const selecionada = opcao3.textContent;
      funcionar.textContent = selecionada;
      opcoes.style.display = 'none';
    });
  });
});

// Validacao Select DropDown
function validarTipo(){
  let opcoes = document.querySelectorAll('.opcao');
  let selecionado = false;

  for (let i=0; i<opcoes.length; i++){
    if(opcoes[i].classList.contains('selecionado')){
      selecionado = true;
      break;
    };
  };

  if (!selecionado){
    alert('Selecione um tipo de carne');
    return;
  };

  alert('Tipo de carne validado.');
};

// Funcionamento checkbox
function marcaCheckbox(checkboxIn) {
  checkboxIn.classList.toggle('checked');
};

function desmarcarCheckbox(checkboxIn) {
  var checkboxes = document.getElementsByClassName('checkbox');

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].classList.toggle('checked');
  };
};

// Validacao do input nome
function validarNome(){
  let input = document.getElementById('nome');
  let name = input.value.trim();

  if (name === ''){
    alert('Preencha o campo Nome.');
    return;
  };

  let nomes = name.split(' ');
  if (nomes.length <2){
    alert('Insira pelo menos dois nomes');
    return;
  };
  alert('Campo Nome validado.');
};

// Validacao do input email
function validarEmail(){
  let input = document.getElementById('email');
  let email = input.value.trim();

  if (email === ''){
    alert('Preencha o campo Email');
    return;
  };
  if (!email.includes('@') || !email.includes('.')){
    alert('Coloque um email valido');
    return;
  };

  const arroba = email.indexOf('@');
  const ponto = email.indexOf('.');
  if (ponto === -1 || ponto - arroba <2){
    alert("Coloque um email valido");
    return;
  };

  const simbolos = email.substring(arroba + 1, ponto).match(/[!#$%&'*+/=?^_`{|}~-]/g);
  if (simbolos === -1){
    alert('Coloque um email valido');
    return;
  };

  alert('Campo email validado.');
};

// Validacao do telefone
function validarTelefone(){
  let input = document.getElementById('telefone');
  let telefone = input.value.trim();

  telefone = telefone.replace(/\s/g,'');

  telefone = telefone.replace(/[()\-]/g, '');
  
  if (telefone.length !== 11){
    alert('O telefone deve conter 11 numeros');
    return;
  };
  alert('Campo telefone validado.');
};

// Validacao do textarea
function validarMensagem(){
  let textarea = document.querySelector('textarea');
  let msg = textarea.value.trim();

  if (msg.length < 5){
    alert('A mensagem deve ter no minimo 5 caracteres.');
    return;
  };

  alert('Campo mensagem validado.');
};