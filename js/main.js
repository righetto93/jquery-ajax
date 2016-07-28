/* Arquivo principal JS */
$(function() {
    $('#AjaxRequest').submit(function() {
        // usando o Ajax do JQuery
        var request = $.ajax({
            // vamos passar parametros aqui
            method: "POST",
            //url - destino da nossa requisicao
            url: "post.php",
            // vamos capturar os dados da nossa requisição
            data: {
                name: $(':input[name=name]').val(),
                email: $(':input[name=email]').val(),
                tel: $(':input[name=tel]').val()
            }
        });

        // e - variavel que vai receber os dados do request
        request.always(function(e) {
            console.log(e);
        });

        // Impede a atualização da pagina         
        return false;
    });
});