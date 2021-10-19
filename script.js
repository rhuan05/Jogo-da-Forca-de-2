var palavraJogo = document.getElementById('palavraJogo');

function jogar(){
    if(palavraJogo.value.length === 0){
        document.querySelector('.preencher').innerHTML = 'Preencha o campo acima para jogar.';
    } else {
        var palavraTamanho = palavraJogo.value.length;
        document.querySelector('.containerPalavra').style.display = 'none';
        var containerGame = document.querySelector('.containerGame');
        containerGame.style.display = 'block';
        

        for(let i=0;i<palavraTamanho;i++){
            document.querySelector('.containerLetras').innerHTML += `<div class="nume" id="nmr${i}"></div>`;
        }
        
    }
}

var erros = 0;

function selecionouLetra(){
    var palavraJogoUp = palavraJogo.value.toUpperCase();
    var letrasPj = palavraJogoUp.split('');
    var letraEscolhida = document.getElementById('letraEscolhida').value;
    var letraEscolhidaUP = letraEscolhida.toUpperCase();
    var palavraJogoTamanho = palavraJogo.value.length;
    var nmr = document.querySelectorAll('.nume');
    document.querySelector('.letrasErradas').style.display = 'block';
    console.log(letrasPj);

    if(letrasPj.indexOf(letraEscolhidaUP) == -1){
        erros = erros + 1;
        document.querySelector('.errosCometidos').innerHTML = erros + ' ';
        document.querySelector('.letrasErradas').innerHTML += letraEscolhidaUP + ' - ';
        if(erros === 5){
            document.querySelector('.containerGame').style.display = 'none';
            document.querySelector('.containerLetras').style.display = 'none';
            document.querySelector('.errosCometidos').style.display = 'none';
            document.querySelector('.perdeu').innerHTML = `VOCÊ PERDEU.<br>A palavra era: ${palavraJogoUp}.<br><br><br>Atualize a página e TENTE novamente.`;
        }
        console.log(erros);
    } else {
        var valorI = 0;
        for(let i=0;i<palavraJogoTamanho;i++){
            if(letrasPj[i] == letraEscolhidaUP){
                document.querySelector(`#nmr${i}`).innerHTML = letraEscolhidaUP;
            }
            if(nmr[i].innerText.length === 1){
                valorI = valorI + 1;
            }
        }
        if(valorI === palavraJogoTamanho){
            document.querySelector('.containerGame').style.display = 'none';
            document.querySelector('.containerLetras').style.display = 'none';
            document.querySelector('.errosCometidos').style.display = 'none';
            document.querySelector('.fimJogo').innerHTML = `VOCÊ VENCEU.<br>A palavra era: ${palavraJogoUp}.<br><br><br>Atualize a página para jogar de novo.`;
        }
    }
}