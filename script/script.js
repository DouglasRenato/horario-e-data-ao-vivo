window.addEventListener("load", function(){
    relogioAtual();
    diaSemana();
    dataAtual();
});

////////////////////////////////// 
// HORARIO
function relogioAtual(){
    let date = new Date();
    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();
    let milissegundo = date.getMilliseconds();
    
    hora = confereHorario(hora);
    minuto = confereHorario(minuto);
    segundo = confereHorario(segundo);

    $(".horario .hora").innerHTML = hora;
    $(".horario .minuto").innerHTML = minuto;
    $(".horario .segundo").innerHTML = segundo;

    setTimeout(function(){relogioAtual()}, 0);
}

function confereHorario(n){
    if(n < 10){
        n = "0" + n;
    }
return n;
}

/////////////////////////////////// 
// DIA DA SEMANA
function diaSemana(){
    let date = new Date();
    let nDiaSemana = date.getDay();
    nDiaSemana = confereSemana(nDiaSemana);

    $("#dia-semana .container .caixa-conteudo span").innerHTML = nDiaSemana;

    setTimeout(function(){diaSemana()}, 3000);
}

function confereSemana(n){
    let diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return diasSemana[n];
}

///////////////////////////////////////////
// DATA
function dataAtual(){
    let date = new Date();
    let diaMes = date.getDate();
    let mes = date.getMonth();
    let ano = date.getFullYear();

    mes = confereMes(mes);

    $("#data .container .caixa-data").innerHTML = diaMes + " de " + mes + " de " + ano; 

    //$("#data .container .caixa-data .dia-mes").innerHTML = diaMes + "/";
    //$("#data .container .caixa-data .mes").innerHTML = mes + "/";;
    //$("#data .container .caixa-data .ano").innerHTML = ano;
    
    setTimeout(function(){dataAtual()}, 3000);
}

function confereMes(n){
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[n];
}


////////////////////////////////
// PRODUTIVIDADE
function $(elemento) {
    return document.querySelector(elemento);
}