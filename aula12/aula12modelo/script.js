alert('Olá!')


function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {

        //Bom Dia!
        img.src = 'manha250.png'
        document.body.style.background = '#F3B557'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'tarde250.png'
        document.body.style.background = '#BE3F10'
    } else {
        //Boa Noite!
        img.src = 'noite250.png'
        document.body.style.background = '#162935'
    }
}
