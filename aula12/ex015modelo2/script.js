function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    // var res = document.querySelector('div#res')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'foto-bebe-m-250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'foto-jovem-m-250.png' )
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'foto-adulto-m-250.png')
            } else {
                //idoso
                img.setAttribute ('src', 'foto-idoso-m-250.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute ('src', 'foto-bebe-f-250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'foto-jovem-f-250.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'foto-adulto-f-250.png')
            } else {
                //idoso
                img.setAttribute ('src', 'foto-idosa-f-250.png')
            }
 

         }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}