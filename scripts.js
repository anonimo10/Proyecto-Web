/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function consultarPorId() {
    var id = $("#codigo").val();
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos/" + id,
        type: 'GET',
        dataType: 'JSON',
        beforeSend: function (xhr) {
            $("#espera").css('display', 'block');
        },
        success: function (resultado) {
            var resultado1 = $("#resultado");
            $.each(resultado, function (index, elemento) {
                if(index==="thumbnailUrl"){
                resultado1.append('<div><img src='+elemento+'></img></div>'); 
                } else {
                    resultado1.append('<div>' + index + elemento + '</div>');
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {

        },
        complete: function (jqXHR, textStatus) {

        }

    });
    
}


function limpiar(){
    
    document.getElementById("codigo").value="";
    document.getElementById("espera").innerHTML="";
    document.getElementById("resultado").innerHTML="";
    
    
}