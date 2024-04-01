const botoes = document.querySelectorAll(".botao");
for(let f=0; f<botoes.length;f++){
    botoes[f].onclick=function(){
        for(let r=0;r<botoes.length;r++){
            botoes[r].classList.remove("ativo");
        }
        botoes[f].classList.add("ativo");  
      }
}