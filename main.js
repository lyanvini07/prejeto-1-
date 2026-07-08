const botoes = document. querySelectorAll("button")
    console.log(botoes)

    botoes.forEach( function (botao){   
        let curtiu = false
        botao.addEventListener("click",botaoClicado)

        function botaoclicado(){     
            console.log ("botao clicado")
            let texto = botao.querySelector("span")
            if(curtiu==false){    
                texto.textContent++;
        }else{  
             texto.textContent--;
             curtiu = false
       }  
   } 
})