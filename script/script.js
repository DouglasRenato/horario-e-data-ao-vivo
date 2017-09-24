window.addEventListener("load", function () {
    relogioAtual();
    diaSemana();
    dataAtual();
    trocaFundoConformeHora();
});


////////////////////////////////// 
// HORARIO
function relogioAtual() {
    let date = new Date();
    let hora = confereHorario(date.getHours());
    let minuto = confereHorario(date.getMinutes());
    let segundo = confereHorario(date.getSeconds());
    let milissegundo = confereHorario(date.getMilliseconds());

    $(".horario .hora").innerHTML = hora;
    $(".horario .minuto").innerHTML = minuto;
    $(".horario .segundo").innerHTML = segundo;

    setTimeout(function () {
        relogioAtual()
    }, 0);
}

function confereHorario(n) {
    if (n < 10) {
        n = "0" + n;
    }
    return n;
}

/////////////////////////////////// 
// DIA DA SEMANA
function diaSemana() {
    let date = new Date();
    let nDiaSemana = confereSemana(date.getDay());

    $("#dia-semana .container .caixa-conteudo span").innerHTML = nDiaSemana;

    setTimeout(function () {
        diaSemana()
    }, 3000);
}

function confereSemana(n) {
    let diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return diasSemana[n];
}

///////////////////////////////////////////
// DATA
function dataAtual() {
    let date = new Date();
    let diaMes = date.getDate();
    let mes = confereMes(date.getMonth());
    let ano = date.getFullYear();

    $("#data .container .caixa-data").innerHTML = diaMes + " de " + mes + " de " + ano;

    //$("#data .container .caixa-data .dia-mes").innerHTML = diaMes + "/";
    //$("#data .container .caixa-data .mes").innerHTML = mes + "/";;
    //$("#data .container .caixa-data .ano").innerHTML = ano;

    setTimeout(function () {
        dataAtual()
    }, 3000);
}

function confereMes(n) {
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[n];
}


///////////////////////////////////////////
// TROCA FUNDO CONFORME HORA DO DIA

function trocaFundoConformeHora() {
    let horaAtual = 6;

    if (horaAtual >= 0 && horaAtual < 6) {
        $("body").classList.add("fundo-noite");
    } else if (horaAtual >= 6 && horaAtual < 12) {
        $("body").classList.add("fundo-manha");
    } else if (horaAtual >= 12 && horaAtual < 18) {
        $("body").classList.add("fundo-tarde");
    } else if (horaAtual >= 18) {
        $("body").classList.add("fundo-noite");
    }

    setTimeout(function () {
        trocaFundoConformeHora()
    }, 1000);
}


////////////////////////////////
// PRODUTIVIDADE
function $(elemento) {
    return document.querySelector(elemento);
}