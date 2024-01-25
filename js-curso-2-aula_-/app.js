let listaNumerosSorteados = []
let numeroLimite = 30
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1? 'tentativas' : 
        'tentativa'
        let msgTentativas = `Você descobriu o número 
        secreto com ${tentativas} ${palavraTentativas}!!!`

        exibirTextoTela('h1', 'Acertou!!!')
        exibirTextoTela('p', msgTentativas)

        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoTela('p', 'o número secreto é menor')
        }
        else{
            exibirTextoTela('p', 'o número secreto é maior')
        }
        tentativas++
        limparCampo()
    }
}
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function exibirMsgInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Selecione um número entre 1 e 100');
}

function reiniciar(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    exibirMsgInicial()
    tentativas = 1
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.lenght

    if(quantidadeDeElementosNaLista == 10){
        listaNumerosSorteados = []
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

exibirMsgInicial()
