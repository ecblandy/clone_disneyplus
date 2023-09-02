document.addEventListener('DOMContentLoaded', () => {
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
});
