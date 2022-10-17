var nome_convidados=[];
function enviar(){
    var nome=document.getElementById("nome1").value;
    nome_convidados.push(nome);
    document.getElementById("displaynome").innerHTML=nome_convidados.toString();

}
function mosta(){
    var iten=nome_convidados.join("<br>");
    document.getElementById("p1").innerHTML=iten.toString();


}
function organiza(){
    nome_convidados.sort();
    var iten=nome_convidados.join("<br>");
    document.getElementById("organizada").innerHTML=iten.toString();

} 
function pesquizar(){
    var nomepesquisado=document.getElementById("pesquiza").value;
    var encontrado=0;
    for (var i=0; i<nome_convidados.length;i++)
    {
        if(nomepesquisado==nome_convidados[i]){
            encontrado++;
        }

    }
    document.getElementById("p2").innerHTML="nome encontrado "+encontrado+"vez(es)";


}

