const {
    readFile
} = require('fs');

const {
    promisify
} = require('util');

const readFileAsync = promisify(readFile);

// outra forma de obter dados do json
// const dadosJson = require('./herois.json')

class Database {
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    escreverDadosArquivo(){

    }

    async listar(id){
        const dados = await this.obterDadosArquivo()

        //se o id foi passado, é para trazer os dados filtrados. Se não foi passado, traga todos os dados
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()