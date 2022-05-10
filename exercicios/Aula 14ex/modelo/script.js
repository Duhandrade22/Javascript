function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    var hora = 10
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src ='imagem/fotomanha.png'
        document.body.style.background = '#df8910' 
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE
        img.src ='imagem/fototarde.png'
        document.body.style.background = '#d68d73'
    } else {
        //BOA NOITE
        img.src ='imagem/fotonoite.png'
        document.body.style.background = '#403150'
    }
}