let listaNumeroSorteados = [];
 let numeroLimite = 10;
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;
 function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 }

 function exibirMensagemInicial(){
     exibirTextoNaTela('h1', 'Jogo de Adivinhação');
     exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
 }

 exibirMensagemInicial();
    
 function verificarChute() {
     let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
         let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
         document.getElementById('reiniciar').removeAttribute('disabled');
     }  else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }   else { 
             exibirTextoNaTela('p', 'O número secreto é maior');
         }
         // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
        }

     }

 function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeelementosEscolhidos = listaNumeroSorteados.length;

     if(quantidadeDeelementosEscolhidos == numeroLimite){
        listaNumeroSorteados = [];
     }

     if(listaNumeroSorteados.includes(numeroEscolhido)){
       // listaNumeroSorteados.push(numeroEscolhido);
      //  return numeroEscolhido;
          return gerarNumeroAleatorio();
     } else {
          listaNumeroSorteados.push(numeroEscolhido);
          console.log(listaNumeroSorteados)
          return numeroEscolhido;
      //  return gerarNumeroAleatorio();
     } 
    
}

 function limparCampo() {
     chute = document.querySelector('input');
     chute.value = '';
 }

 function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }


// let listaNumeroSorteados = [];
// let numeroLimite = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;
// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto
// }

// function exibirMensagemInicial(){
//     exibirTextoNaTela('h1', 'Jogo de Adivinhação');
//     exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
// }

// exibirMensagemInicial();
    
// function verificarChute() {
//     let chute = document.querySelector('input').value;
    
//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1', 'Parabéns, você acertou!');
//         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativa}`;
//         exibirTextoNaTela('p', mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     }
//         else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p', 'O número secreto era menor');
//         }
//         else { 
//             exibirTextoNaTela('p', 'O número secreto era maior');
//         }
//         // tentativas = tentativas + 1;
//         tentativas++;
//         limparCampo();
//         }

//     }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
//     let quantidadeDeelementosEscolhidos = listaNumeroSorteados.length;

//     if(quantidadeDeelementosEscolhidos == 10){
//     listaNumeroSorteados = [];
//     }

//     if(!listaNumeroSorteados.includes(numeroEscolhido)){
//         return gerarNumeroAleatorio();
//     } else {
//         listaNumeroSorteados.push(numeroEscolhido);
//         return numeroEscolhido;
//     }
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled', true);
// }