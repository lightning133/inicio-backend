let notas=[8,7,6,9,10];
let soma=0;
for(let i=0; i<notas.length ; i++){
    soma+=notas[i];
}  
let media= soma/notas.length;
console.log("a media e",media);
for(let x=1; x <=5; x ++){
    console.log("contando:",x);
}
let nuumero=7;
console.log("tabuada do ${numero}");
for(let i=1; i<=10; i++){
    let resultado= numero* i;
    console.log("${numero} x${i}=$ {resultado}");

}
for(const fruta of frutas){
    console.log(fruta);
}

const ferramentas =["martelo", "fita isolante", "chave", "alicate","chave fenda"]
for(let i=0 i <ferramentas.length;i++){
    console.log ("verificando:"+ ferramentas [i]);
    if(ferramentas[i]==="chave"){
        console.log ("*** achei a ferramenta! parando a busca");
        break
    }
}