document.addEventListener('DOMContentLoaded', () => {
    menuLista()
    faq()
    pegaAlturaHeader()

});

function menuLista() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const conteudoLista = document.querySelectorAll('[data-tab-id]');
    buttons.forEach(button => button.addEventListener('click', () => {
        const atributo = button.getAttribute('data-tab-button');

        buttons.forEach(btn => {
            btn.classList.remove('shows__tabs__button--is-active');
        });

        conteudoLista.forEach(conteudo => {
            conteudo.classList.remove('shows__list--is-active');
        });

        button.classList.add('shows__tabs__button--is-active');

        const abaAtiva = document.querySelector(`[data-tab-id="${atributo}"]`);
        if (abaAtiva) {
            abaAtiva.classList.add('shows__list--is-active');
        }
    }));
}

function faq() {
    const questions = document.querySelectorAll('[data-faq-question]')

    questions.forEach(question => {
        question.addEventListener('click', abreOuFechaResposta)
        
    })
    function abreOuFechaResposta(event) {
        const classe = 'faq__questions__item--is-open'
        const elementoPai = event.target.parentNode;
        elementoPai.classList.toggle(classe)
    }
    
}

function pegaAlturaHeader() {
    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY
        if(posicaoAtual < alturaHero ){
            ocultaElementosHeader()
        } else {
            exibeElementosHeader()
        }
    })
}

function ocultaElementosHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}