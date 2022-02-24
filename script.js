function QualSeuNome() {
    const Nome = prompt("Qual Seu nome?")
    if (Nome === "") {
        prompt("Qual Seu nome?")
    }
    //essa ta boa tbm
}




function escolherCamisa(camisa) {
    // 1 - eu selecionei a classe camisa-Selecionada (so tem no css), 
    //pq ela é pra dizer que é a img que vai ter que ser com a borda azul ( blz)
    const camisaEscolhida = document.querySelector(".Camisa-Selecionada");
    
    // 3 - eu falei: se a div com as imgs já tem uma selecionada , tirar a seleção da anterior da img APENAS
    if (camisaEscolhida !== null) {
        camisaEscolhida.classList.remove("CamisaEscolhida");
    } else {
        // 4 - se n teve a seleção ainda , selecionar (add a borda azul)
        camisa.classList.add("CamisaEscolher");
        //5- sendo sincera , n entendi oq a escolhidaBlusa , so sei que ela poe algo no html 
        escolhidaBlusa = document.querySelector(".camisa-Selecionada img .fundoCinza ").innerHTML;

    }
//usar o método do pato de borracha que o professor disse , vai que ajuda ;-; (função , me ajudakkkk pfv)

// dica do professor : sempre vai cair no else 

}


console.log(escolherCamisa)
function LinkObrigatorio() {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = 'www.google.com';
    Input = document.querySelector(".link").value
    if (Input === "") {
        alert("ops...algo deu errado . Verifique se preencheu tudo, por favor!")
    } else if (Input.match(regex)) {
        alert("bom link")
    } else {
        (Input !== regex)
        alert("link ruim, coloque uma url válida por favor")
    }
//essa funciona , tbm depois de tanto validar input na vida , eu to mecanica nesse de url...kkkkk

}

QualSeuNome()