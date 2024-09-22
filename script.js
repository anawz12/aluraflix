const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoPasso = botao.getAttribute('data-proximo');
            document.querySelectorAll('.passo').forEach(passo => {
                passo.classList.remove('active');
                      document.getElementById('passo-' + proximoPasso).classList.add('active');
        })
    })
