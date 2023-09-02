//Várias partes do código foram tiradas do exemplo disponível no site da viacep

function pesquisa() {

    var cepCaptura = $("#pesquisa").val();
    var cep = cepCaptura.replace(".", "").replace("-", "");
    console.log(cep);

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    $(".modal").modal('show');
                    $("#logradouro").val(dados.logradouro);
                    $("#complemento").val(dados.complemento);
                    $("#localidade").val(dados.localidade);
                    $("#estado").val(dados.uf);
                    $("#ddd").val(dados.ddd);
                    $("#bairro").val(dados.bairro);
                }
                else {
                    limpaFormulario();
                    alert("CEP não encontrado.");
                }
            });
        }
        else {
            limpaFormulario();
            alert("Formato de CEP inválido.");
        }
    }
    else {
        limpaFormulario();
        alert("O CEP não deve ser nulo");
    }
}

//Limpando formulário
function limpaFormulario() {
    $("#logradouro").val("");
    $("#complemento").val("");
    $("#bairro").val("");
    $("#localidade").val("");
    $("#estado").val("");
    $("#ddd").val("");
    $("#pesquisa").val("");
}