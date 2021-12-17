
let diaHoje = new Date();
let dia = diaHoje.getDate();
let mes = diaHoje.getMonth() + 1;
let ano = diaHoje.getFullYear();

window.onload= function(){
    document.getElementById('date').value= ano + '-' + mes + '-' + dia 
    requisicao()
}


let botao = $('#pesquisar')
botao.on('click', function(){
    requisicao()
});


function requisicao(){
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=c0rZBhWA17eRlEVJekMQW8fFD2hAkMp4U9HaRH74&date=${date.value}`,
        success: function(result){
            $('#texto').html(`${result.explanation}`)
            $('#autor').html(`Autor:${result.copyright}`)
            if(result.media_type == 'image'){
                $('#minhaImagem').attr('src', (result.url))
                document.getElementById('minhaImagem').style.display = 'block'
                document.getElementById('video').style.display = 'none'
            }else{
                document.getElementById('minhaImagem').style.display = 'none'
                document.getElementById('video').style.display = 'block'
                $('#video').attr('src', (result.url))
            }
            console.log(result)
        }
        })
    
}