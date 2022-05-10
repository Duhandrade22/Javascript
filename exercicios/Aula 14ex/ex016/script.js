function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = documen.getElementById('txtpasso')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        alert ('Tudo ok')
    }
}