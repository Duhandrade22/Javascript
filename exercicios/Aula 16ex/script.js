let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let rest = document.getElementById('res')
let velores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, ) {
    if(lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

}