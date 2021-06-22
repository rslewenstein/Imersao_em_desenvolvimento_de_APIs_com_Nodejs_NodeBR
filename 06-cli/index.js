const Commander = require('commander')
const Database = require('./database')

async function main(){
    Commander
        .version('v1')
        .option('-n, --nome []', "Nome do Heroi")

        .parse(process.argv)

    try{

    }   catch(error){
        console.error('DEU RUIM', error)
    } 
}

main()