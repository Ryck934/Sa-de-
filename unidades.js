
const formulario = document.querySelector("#form-unidades");
const campoBusca = document.querySelector("#busca-unidades");
const botoesCategoria = document.querySelectorAll("[data-tipo]");

function pesquisarUnidades(termo) {
    const pesquisa = termo.trim();

    if (pesquisa === "") {
        campoBusca.focus();
        return;
    }

    const url = new URL("https://www.google.com/maps/search/");
    url.searchParams.set("api", "1");
    url.searchParams.set("query", pesquisa);

    window.open(url.toString(), "_blank", "noopener,noreferrer");
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    pesquisarUnidades(campoBusca.value);
});

botoesCategoria.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const tipo = botao.dataset.tipo;
        campoBusca.value = tipo;
        pesquisarUnidades(tipo);
    });
});
