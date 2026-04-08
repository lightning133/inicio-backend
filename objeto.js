const usuarios = [ //cria variavel que armazena uma lista (array)
    { nome: "Carlos", idade: 32 },
    { nome: "Ana", idade: 28 },
    { nome: "Felipe", idade: 40 }
];
 //Encontrando um objeto
 const ana = usuarios.find(usuario => usuario.nome === "Ana"); // "o find vai buscar" - "=== é exatamente igual"
 console.log(ana);

 // Filtrando objetos
 const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30); // "o filter vai filtrar"
 console.log(usuariosAcimaDe30);

 // Ordenando objetos por idade
 const usuariosOrdenadosPorIdade = usuarios.sort((a, b) => a.idade - b.idade); // "o sort vai ordenar"
 console.log(usuariosOrdenadosPorIdade);

 // Ordenando objetos por idade
 const usuariosOrdenadosPorIdades = usuarios.sort((a, b) => b.idade - a.idade); // "o sort vai ordenar"
 console.log(usuariosOrdenadosPorIdades);