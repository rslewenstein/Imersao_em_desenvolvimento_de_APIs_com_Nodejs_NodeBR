/*
    0 Obter um usuário
    1 Obter o numero de telefone de usuario a partir de seu Id
    2 Obter o endereco do usuario pelo Id
*/

// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    //Quando der problema -> reject(ERRO)
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
}

function obterTelefone(idUsuario){
    return new Promise(function resolverTelefone(resolve, reject){
        setTimeout(() => {
            return resolve({
                ddd: 32,
                telefone: '9998745'
            })
        }, 2000);
    })
}    

function obterEndereco(idUsuario, callback){
        setTimeout(() => {
            return callback(null,{
                rua: 'dos bobos',
                numero: 0
            })
        }, 2000);
}

//1º passo: adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main(){

    try{
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
//             Nome: ${usuario.nome}
//             Endereço: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd}) ${telefone.telefone} 
//         `)
    }catch(error){
        console.error('DEU RUIM', error)
    }
}

// const usuarioPromise = obterUsuario()
// //para manipular o sucesso usamos a funcao.then
// //para manipular erros, usamos o .catch

// usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result){
//                 return{
//                 usuario: {
//                     id: usuario.id,
//                     nome: usuario.nome

//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function (resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function(resultado){
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone} 
//         `)
//     })
//     .catch(function (error){
//         console.error('DEU RUIM', error)
//     })





// obterUsuario(function resolverUsuario(error, usuario){
//     //null || "" || 0 === false
//     if(error){
//         console.error('DEU RUIM em USUARIO', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('DEU RUIM em TELEFONE', error1)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error('DEU RUIM em ENDERECO', error2)
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome}
//                 Endereço: ${endereco.rua}, ${endereco.numero}
//                 Telefone: (${telefone.ddd}), ${telefone.telefone} 
//             `)
//         })
//     })
// })