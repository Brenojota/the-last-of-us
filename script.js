const botoesCarrossel = document.querySelectorAll('.botao');

//  PERCORRER TODOS OS BOTOES

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click' , () =>{ 

        //  MUDANDO A CLASSE DO BOTAO SELECIONADO E ATRIBUINDO AO NOVO

        const botaoSelecionado = document.querySelector('.selecionado')

        botaoSelecionado.classList.remove('selecionado')

        botao.classList.add('selecionado')

        //  REMOVENDO O FUNDO DA IMAGEM

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa')

        //  MUDANDO PARA A NOVA IMAGEM NO INDICE DAS IMAGENS DE ACORDO COM O BOTAO

        const imagensCarrossel = document.querySelectorAll('.imagem')
        imagensCarrossel[indice].classList.add('ativa')

        
    })
})