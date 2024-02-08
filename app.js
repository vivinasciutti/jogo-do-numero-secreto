    let listaDeNumerosSorteados = []
    let numeroMaximo = 10;
    let numeroSecreto = gerarNumeroAleatorio ();
    let tentativa = 1

    function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
    function mensagemInicial(){
        exibirTextoNaTela('h1','Jogo do número secreto!');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
        mensagemInicial()
    function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let parlavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${parlavraTentativa}`;
    exibirTextoNaTela('p',mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Quase!')
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('h1', 'Quase!')
            exibirTextoNaTela('p', 'O número secreto é maior');   
            }
            tentativa++;
            limpaChute();
        }
    }
    function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
   }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
       }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
       }
}
    function limpaChute (){
    chute = document.querySelector('input');
    chute.value = '';

}
    function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaChute();
    tentativa = 1
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}   
